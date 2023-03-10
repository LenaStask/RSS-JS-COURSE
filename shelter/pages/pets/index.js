const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav__container');
const logo = document.querySelector('.logo');
const shadow = document.querySelector('.shadow');
const header = document.querySelector('.header_pets');
const lockScroll = document.querySelector('.body');

function toggleMenu() {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
    logo.classList.toggle('open');
    shadow.classList.toggle('open');
    header.classList.toggle('open');
    lockScroll.classList.toggle('lock');
}

hamburger.addEventListener('click', toggleMenu);
shadow.addEventListener('click', toggleMenu);

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
const carousel = document.querySelector('.pets');
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
            <div class="popup__close">
                <a class="button popup__close__button"><img src="../../assets/icons/close.svg" alt="close"></a>
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

const popupPage = document.querySelector('.popup__page');


function addHover() {
    popupBtn.classList.add('hover');
}
function removeHover() {
    popupBtn.classList.remove('hover');
}

popupPage.addEventListener('mouseenter', removeHover);
popupPage.addEventListener('mouseleave', addHover);


// pagination

const petsCards = document.querySelector('.pets__cards');

const buttonToFirst = document.querySelector('.button-to-first');
const buttonToPrev = document.querySelector('.button-to-previous');
const buttonToNext = document.querySelector('.button-to-next');
const buttonToLast = document.querySelector('.button-to-last');
const buttonNumbered = document.querySelector('.button__numbered');

// create array 6 page and 8 cards in a page

let petsPerPage;

if (window.innerWidth >= 1280) {
    petsPerPage = 8;
} else if (window.innerWidth >= 768) {
    petsPerPage = 6;
} else {
    petsPerPage = 3;
}

let totalPages = 48/petsPerPage;
let currentPage;

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function duplicatePets() {
    let plain = [];
    let shuffled = [];
    for (let i = 0; i < 6; i++) {
        plain = plain.concat(pets.slice());
    }
    for (let i = 0; i < 48; i += petsPerPage) {
        const arr = shuffle(plain.slice(i, i + petsPerPage));
        shuffled = shuffled.concat(arr);
    }
    return shuffled;
}

function createPet(pet) {
    const el = document.createElement('div');
    el.classList.add('pets-card');
    el.dataset.id = pet.id;
    el.innerHTML = `
        <img class="pets-image" src="${pet.img_small}" alt="${pet.name}">
        <h4 class="pets__name">${pet.name}</h4>
        <button class="button button_bordered card__button">Learn more</button>
    `;
    return el;
}

let allPets = duplicatePets();

function renderPage(page) {
    const pets = allPets.slice((page-1)*petsPerPage, page*petsPerPage);
    petsCards.innerHTML = '';
    pets.forEach(pet => {
        const el = createPet(pet);
        petsCards.appendChild(el);
    });
}

function changePage(page) {
    currentPage = page;
    buttonNumbered.innerText = currentPage;

    buttonToFirst.disabled = false;
    buttonToPrev.disabled = false;
    buttonToNext.disabled = false;
    buttonToLast.disabled = false;
    if (currentPage == 1) {
        buttonToFirst.disabled = true;
        buttonToPrev.disabled = true;
    } else if (currentPage == totalPages) {
        buttonToNext.disabled = true;
        buttonToLast.disabled = true;
    }

    renderPage(currentPage);
}

document.addEventListener('DOMContentLoaded', () => changePage(1));

buttonToFirst.addEventListener('click', () => changePage(1));
buttonToPrev.addEventListener('click', () => changePage(currentPage - 1));
buttonToNext.addEventListener('click', () => changePage(currentPage + 1));
buttonToLast.addEventListener('click', () => changePage(totalPages));
