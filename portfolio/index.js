const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-title-1': 'Standard',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-title-2': 'Premium',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-title-3': 'Gold',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'email': 'E-mail',
    'phone':'Phone',
    'message':'Message',
    'send-message': 'Send message',
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-title-1': 'Стандартный',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-title-2': 'Премиум',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-title-3': 'Золотой',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'email': 'Электронная почта',
    'phone':'Телефон',
    'message':'Сообщение',
    'send-message': 'Отправить'
  }
};

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
//nav.addEventListener('click', closeMenu);

 function closeMenu(event) {
   if (event.target.classList.contains('nav-link')) {
     hamburger.classList.remove('open');
     nav.classList.remove('open');
   }
 }

 
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioButtons = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtns.addEventListener('click', changeImage);

function changeImage(event) {
  const el = event.target;
  if (el.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${el.dataset.season}/${index + 1}.jpg`);
  }
}

portfolioBtns.addEventListener('click', changeSeason);

function changeSeason(event) {
  const el = event.target;
  if (el.classList.contains('portfolio-btn')) {
    portfolioButtons.forEach((btn) => btn.classList.remove('active'));
    el.classList.add('active');
  }
}

let lang = 'ru';
let theme = 'dark';

const switchLng = document.querySelector('.switch-lng');
switchLng.addEventListener('click', changeLanguage);

function changeLanguage(event) {
  const el = event.target;
  if (el instanceof HTMLAnchorElement) {
    lang = el.dataset.lang;
    getTranslate(lang);
  }
}

const arrayOfElements = document.querySelectorAll('body, .section-skills, .section-portfolio, .section-price, .section-title span, .price-items');
const carbonSunBtn = document.querySelector('.carbon-sun');
carbonSunBtn.addEventListener('click', changeTheme);

function changeTheme() {
  theme = (theme == 'dark' ? 'light' : 'dark');
  changeUITheme();
}

function changeUITheme() {
  arrayOfElements.forEach((el) => el.classList.toggle('light-theme'));
}
 

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages() {
  seasons.forEach((season) => preloadSeasonImages(season) )
}
function preloadSeasonImages(season) {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${season}/${i}.jpg`;
  }
}
preloadImages();


function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    if (theme != 'dark') {
      changeUITheme();
    }
  }
}
window.addEventListener('load', getLocalStorage);


function getTranslate(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    if (i18Obj[lang][el.dataset.i18n]) {
      const text = i18Obj[lang][el.dataset.i18n];
      if (el.placeholder) {
        el.placeholder = text;
        el.textContent = '';
      } else {
        el.textContent = text;
      }
    }
  });
}

 const player = document.querySelector('.player');
 const videoCover = document.querySelector('.video-cover');
 const video = player.querySelector('.viewer');
 const playBtn = player.querySelector('.play-btn');
 const videoBtn = document.querySelector('.video-btn');
 const progress = player.querySelector('.progress');
 const volumeBtn = player.querySelector('.volume-btn');
 const volume = player.querySelector('.volume');


 function togglePlay() {
   if(video.paused) {
     video.play();
   } else {
     video.pause();
   }
 }
function changePlayBtn() {
   if(video.paused) {
     playBtn.classList.remove('pause');
     playBtn.classList.add('play');
   } else {
     playBtn.classList.remove('play');
     playBtn.classList.add('pause');
   }
}
 
function play() {
  videoCover.classList.add('hide');
  updateVolume(0.5);
  togglePlay();
}

function changeColorProgress(value){
  progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #fff ${value}%, white 100%)`
}

function changeColorVolume(value){
  volume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value*100}%, #fff ${value*100}%, white 100%)`
}

function handleProgress() {
  const persenge = (video.currentTime / video.duration)*100;
  changeColorProgress(persenge);
  progress.value = persenge;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth )* video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

function updateVolume(volume) {
  video.volume = volume;
  changeColorVolume(volume);
  if (volume == 0) {
    volumeBtn.classList.add('mute');
  } else {
    volumeBtn.classList.remove('mute');
  }
}

let lastVolume;

function changeVolumeBtn() {
  if (volumeBtn.classList.contains('mute')) {
    updateVolume(lastVolume);
  } else {
    lastVolume = video.volume;
    updateVolume(0);
  }
  volume.value = video.volume;
}

videoBtn.addEventListener('click', play);
playBtn.addEventListener('click', togglePlay);
video.addEventListener('play', changePlayBtn);
video.addEventListener('pause', changePlayBtn);
progress.addEventListener('input',changeColorProgress);
progress.addEventListener('click',scrub);
let isMouseDown = false;
progress.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
progress.addEventListener('mousedown',() => isMouseDown = true);
progress.addEventListener('mouseup', () => isMouseDown = false); 
volume.addEventListener('input', (e) => updateVolume(e.target.value));
volumeBtn.addEventListener('click', changeVolumeBtn);
video.addEventListener('timeupdate', handleProgress);