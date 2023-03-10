//burger
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav__container');
const logo = document.querySelector('.logo');
const shadow = document.querySelector('.shadow');
const lockScroll = document.querySelector('.body');


function toggleMenu() {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
    logo.classList.toggle('open');
    shadow.classList.toggle('open');
    lockScroll.classList.toggle('lock');
}

hamburger.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);
logo.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav__link');
 
function closeMenu(event) {
    if (event.target.classList.contains('nav__link')) {
        hamburger.classList.remove('open');
        navigation.classList.remove('open');
        logo.classList.remove('open');
        lockScroll.classList.remove('lock');
        shadow.classList.remove('open');
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));


//popup
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup__image');
const carousel = document.querySelector('.carousel');
const popupContent = document.querySelector('.popup__content__wrapper');


function openPopup(event) {
    const card = event.target.closest('.pets-card');
    if (card) {
        const data = pets[card.dataset.id];
        popupContent.innerHTML = `
            <div class="popup__img__wrapper">
                <img class="popup__image" src="${data.img}" alt="${data.name}">
            </div>
            <div class="popup__content">
                <h3 class="popup__title">${data.name}</h3>
                <h4>${data.type} - ${data.breed}</h4>
                <div class="popup__text">${data.description}</div>
                <ul>
                    <li><span>Age: </span>${data.age}</li>
                    <li><span>Inoculations: </span>${data.inoculations}</li>
                    <li><span>Diseases: </span>${data.diseases}</li>
                    <li><span>Parasites: </span>${data.parasites}</li>
                </ul>
            </div> 
        `;
        popup.classList.add('open');
        lockScroll.classList.add('lock');
    }
}
carousel.addEventListener('click', openPopup);

const popupBtn = document.querySelector('.popup__close__button');


function closePopup(event) {
    let classes = event.target.classList;
    if(classes.contains('popup__body') || classes.contains('popup__close__button')) {
        removeHover();
        popup.classList.remove('open');
        lockScroll.classList.remove('lock');
    }
}

popupBtn.addEventListener('click', closePopup);
popup.addEventListener('click', closePopup);

//hover popup__close__button

const popupPage = document.querySelector('.popup__page');


function addHover() {
    popupBtn.classList.add('hover');
}
function removeHover() {
    popupBtn.classList.remove('hover');
}

popupPage.addEventListener('mouseenter', removeHover);
popupPage.addEventListener('mouseleave', addHover);

//carousel

const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');
const itemLeft = document.querySelector('.item-left');
const itemActive = document.querySelector('.item-active');
const itemRight = document.querySelector('.item-right');

function createPetCard(id) {
    const data = pets[id];
    const card = document.createElement('div');
    card.classList.add('pets-card');
    card.dataset.id = id;
    card.innerHTML = `
        <img class="pets-image" src="${data.img_small}" alt="${data.name}">
        <h4 class="pets__name">${data.name}</h4>
        <button class="button button_bordered card__button">
            Learn more
        </button>
    `;
    return card;
}

function moveLeft() {
    carousel.classList.add('transition-left');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight);
}
function moveRight() {
    carousel.classList.add('transition-right');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
}

buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);

let leftCardArray;
let currentCardArray = [4, 0, 2];
let rightCardArray;

// create random arr of 3 elments != array
function getRandomArr(array) {
    let arr=[];
    let a = 0;
    for (let i=0; i<3; i++) {
      a = Math.floor(Math.random() * 7);
      if (arr.includes(a) || array.includes(a)) {
        i--;
      } else {
        arr.push(a);
      }     
    }
    return arr; 
  }

function removeTransition(animationEvent) {
    let changeItem;
    if (animationEvent.animationName === 'move-left') {
        carousel.classList.remove('transition-left');
        changeItem = itemLeft;
        currentCardArray = leftCardArray;
    } else {
        carousel.classList.remove('transition-right');
        changeItem = itemRight;
        currentCardArray = rightCardArray;
    }
    itemActive.innerHTML = changeItem.innerHTML;
    renderLeftRightCards();
    buttonLeft.addEventListener('click', moveLeft);
    buttonRight.addEventListener('click', moveRight);
}

carousel.addEventListener('animationend', removeTransition);

function renderLeftRightCards() {
    itemLeft.innerHTML = '';
    itemRight.innerHTML = '';

    leftCardArray = getRandomArr(currentCardArray);
    rightCardArray = getRandomArr(currentCardArray);
    for (let i=0; i<3; i++) {
        itemLeft.appendChild(createPetCard(leftCardArray[i]));
        itemRight.appendChild(createPetCard(rightCardArray[i]));
    }
}

document.addEventListener('DOMContentLoaded', renderLeftRightCards);