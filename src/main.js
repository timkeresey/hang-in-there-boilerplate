// query selector variables go here 👇
var mainImage = document.querySelector('.poster-img');
var mainTitle = document.querySelector('.poster-title');
var mainQuote = document.querySelector('.poster-quote');
//_Buttons
var savePosterButton = document.querySelector('.save-poster');
var showSavedButton = document.querySelector('.show-saved');
var showRandomButton = document.querySelector('.show-random');
var makeYourPoster = document.querySelector('.show-form');
var showMyPosterButton = document.querySelector('.make-poster');
var nevermindButton = document.querySelector('.show-main');
var backToMainButton = document.querySelector('.back-to-main');
//_sections
var mainSection = document.querySelector('.main-poster');
var formSection = document.querySelector('.poster-form');
var savedPostersSection = document.querySelector('.saved-posters');
//_form
var inputImage = document.querySelector('#poster-image-url')
var inputTitle = document.querySelector('#poster-title')
var inputQuote = document.querySelector('#poster-quote')

// var savedPosters = [
//   makePoster(
//     "https://i.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif",
//     "Optimism",
//     "Keep a joyful heart!"
//   )
// ];
var currentPoster;

// event listeners go here 👇
window.onload = displayRandomPoster;
showRandomButton.addEventListener('click', displayRandomPoster);
makeYourPoster.addEventListener('click', showPostersForm);
showMyPosterButton.addEventListener('click', createUserPoster)
nevermindButton.addEventListener('click', goHome);
showSavedButton.addEventListener('click', displaySavedPosters);
backToMainButton.addEventListener('click', goHome);

// functions and event handlers go here 👇
function injectUsersPoster() {
  mainImage.src = images[0];
  mainTitle.innerText = titles[0];
  mainQuote.innerText = quotes[0];
}

function storeUsersData() {
  images.unshift(inputImage.value)
  titles.unshift(inputTitle.value)
  quotes.unshift(inputQuote.value)
}

function displaySavedPosters() {
  savedPostersSection.classList.remove('hidden');
  mainSection.classList.add('hidden');
};

function createUserPoster(event) {
  event.preventDefault();
  storeUsersData()
  currentPoster = new Poster(images[0], titles[0], quotes[0])
  goHome();
  injectUsersPoster()
};

function goHome() {
  formSection.classList.add('hidden');
  mainSection.classList.remove('hidden');
};

function displayRandomPoster() {
  mainImage.src = images[getRandomIndex(images)];
  mainTitle.innerText = titles[getRandomIndex(titles)];
  mainQuote.innerText = quotes[getRandomIndex(quotes)];
};

function showPostersForm() {
  formSection.classList.remove('hidden');
  mainSection.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
