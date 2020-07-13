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
var savedPostersGrid = document.querySelector('.saved-posters-grid');
var miniPoster = document.querySelector('.mini-poster');
//_form
var inputImage = document.querySelector('#poster-image-url')
var inputTitle = document.querySelector('#poster-title')
var inputQuote = document.querySelector('#poster-quote')

var currentPoster;

// event listeners go here 👇
window.onload = displayRandomPoster;
showRandomButton.addEventListener('click', displayRandomPoster);
makeYourPoster.addEventListener('click', showPostersForm);
showMyPosterButton.addEventListener('click', createUserPoster)
nevermindButton.addEventListener('click', goHome);
showSavedButton.addEventListener('click', displaySavedPosters);
backToMainButton.addEventListener('click', goHome);
savePosterButton.addEventListener('click', savePoster);
savedPostersSection.addEventListener('dblclick', deletePoster);

// functions and event handlers go here 👇
function deletePoster(event) {
  var elementID = Number(event.target.id);
  for (i = 0; i < savedPosters.length; i++) {
    if (elementID === savedPosters[i].id) {
      savedPosters.splice(i, 1);
    }
  }
  displayGallery();
}

function displayGallery() {
  savedPostersGrid.innerHTML = ''
  for (i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML +=
    `
    <article class="mini-poster">
      <img src="${savedPosters[i].imageURL}" id="${savedPosters[i].id}">
      <h2>${savedPosters[i].title}</h2>
      <h4>${savedPosters[i].quote}</h4>
    </article>
    `
  //console.log(savedPosters[i])
  //Expecting all elements to exist in one section on the grid, but each element
  //is taking up its own grid space.
    //Issue arises when trying save posters to save posters grid after clicking
    //show saved posters button.
  };
}
function savePoster() {
  if (!savedPosters.includes(currentPoster)){
    savedPosters.unshift(currentPoster);
    // console.log(savedPosters)
  };
}

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
  //display savedPosters array on savedPostersGrid
    //loop through each element in savedPosters array
    displayGallery()
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
  savedPostersSection.classList.add('hidden')
  mainSection.classList.remove('hidden');
};

function displayRandomPoster() {
  mainImage.src = images[getRandomIndex(images)];
  mainTitle.innerText = titles[getRandomIndex(titles)];
  mainQuote.innerText = quotes[getRandomIndex(quotes)];
  currentPoster = new Poster(mainImage.src, mainTitle.innerText, mainQuote.innerText)
  // console.log(currentPoster)
};

function showPostersForm() {
  formSection.classList.remove('hidden');
  mainSection.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
