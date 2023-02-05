const toggleOpeningTimesButton = document.querySelector(
  '.toggle-opening-times-button'
);
const openingTimesList = document.querySelector('.opening-times-list');
const openingTimesText = document.querySelector('.opening-times-text');

const togglePriceButton = document.querySelector('.toggle-price-button');
const priceButton = document.querySelector('.price-button');
const priceList = document.querySelector('.price-list');

toggleOpeningTimesButton.addEventListener('click', e => {
  e.preventDefault();

  openingTimesList.classList.toggle('show');
  openingTimesText.classList.toggle('show');
  toggleOpeningTimesButton.classList.toggle('flip');
});

togglePriceButton.addEventListener('click', e => {
  e.preventDefault();

  priceList.classList.toggle('show');
  priceButton.classList.toggle('show');
  togglePriceButton.classList.toggle('flip');
});

console.log('memes');
