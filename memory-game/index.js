const cards = document.querySelectorAll('.card');
const moves = document.querySelector('.game-moves');
const gameResult = document.querySelector('.game-result');
const numberOfMoves = document.querySelector('.moves-result');
const newGameBtn = document.querySelector('.start-new-btn');
const showResultsBtn = document.querySelector('.result-btn');
const closeResultTable = document.querySelector('.table-result-btn');
const allGameResults = document.querySelector('.game-all-results');
const resulsTable = document.getElementById('results');

let turnedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let countMoves = 0;
let numberOfPairs = 8;
let numberOfOpenedPairs = 0;
let results = [];

function turnCard() {
    if (lockBoard) { 
        return;
    }    
    this.classList.add('turn');
    if(!turnedCard) {
        turnedCard = true;
        firstCard = this;
        return;
    } else {
        secondCard = this;
        countMoves++;
        moves.innerHTML = countMoves;
        turnedCard = false;
        checkForEqual();
    }
}
// проверяем две открытые карточки на совпадение
function checkForEqual() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        leaveCards();
        numberOfOpenedPairs++;
        checkEndGame();
        return;
    }
    unTurnCard();

}
//оставляем карточки открытыми
function leaveCards() {
    firstCard.removeEventListener('click', turnCard);
    secondCard.removeEventListener('click', turnCard);
}
// переворачиваем несовпавшие карточки обратно
function unTurnCard() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('turn');
        secondCard.classList.remove('turn');
        lockBoard = false;
    }, 1000);
}
// перемешиваем карточки
function mixCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*16);
        card.style.order = randomPos;
    });
}
mixCards();

//проверка на завершение игры
function checkEndGame() {
    if(numberOfOpenedPairs === numberOfPairs) {
        gameResult.classList.add('show');
        numberOfMoves.innerHTML = countMoves; 
        results.push(countMoves);
    }  
}


newGameBtn.addEventListener('click', startNewGame);

//начать новую игру
function startNewGame() {
    cards.forEach( card => {
        card.classList.remove('turn');
        card.addEventListener('click',turnCard);
    });
    gameResult.classList.remove('show');
    countMoves = 0;
    moves.innerHTML = countMoves;
    numberOfOpenedPairs = 0;
    turnedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    mixCards();
}

function setLocalStorage() {
    localStorage.setItem('results', JSON.stringify(results));
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    const res = localStorage.getItem('results');
    if (res) {
        results = JSON.parse(res);
    }
}
window.addEventListener('load', getLocalStorage);

function fillResultsTable() {
    let html = '';
    results.forEach((result, index) => {
        html += `
            <tr>
                <td>${index + 1}.</td>
                <td>${result}</td>
            </tr>
        `;
   });
   resulsTable.innerHTML = html;
}

closeResultTable.addEventListener('click', function() {
    allGameResults.classList.remove('show');
});

showResultsBtn.addEventListener('click', function() {
    fillResultsTable();
    allGameResults.classList.add('show');
});

cards.forEach(card => card.addEventListener('click', turnCard));
