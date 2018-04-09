const URL = 'https://anapioficeandfire.com/api';
const MAIN = document.querySelector('#main');
const PREV_LINK = document.querySelector('[data-prev]');
const NEXT_LINK = document.querySelector('[data-next]');

let currentPage = 1;

PREV_LINK.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    getHouses();
  }
});

NEXT_LINK.addEventListener('click', (e) => {
  e.preventDefault();
  currentPage = currentPage + 1;
  getHouses();
});

// A function that talks to the API
const getData = (forWhat) => {
  // Use the fetch function to talk to the API
};

// A function that lists houses out.
const getHouses = () => {
  getData('houses').then( data => {
    const houseList = document.createElement('ul');

    // Do something with the data

    MAIN.innerHTML = '';
    MAIN.appendChild(houseList);
  });
};

// kick everything off
getHouses();
