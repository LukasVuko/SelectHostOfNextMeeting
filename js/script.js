/******************************************
project 1 - A Random Quote Generator
******************************************/

// Quotes array

let quotes = [
  {
    quote: 'Lukas',
  },
  {
    quote: 'Baba',
  },
  {
    quote: 'Johanna',
  },
  {
    quote: 'Jun',
  },
  {
    quote: 'Yahiya',
  },
  {
    quote: 'Sureya',
  },
  {
    quote: 'Ruby',
  },
  {
    quote: 'Varna',
  },
  {
    quote: 'Allen',
  },
  {
    quote: 'Ramandeep',
  },
  {
    quote: 'Marco',
  },
  {
    quote: 'Ola',
  },
  {
    quote: 'Jamila',
  },
  {
    quote: 'David',
  },
  {
    quote: 'Amandip',
  },
];

// Gets a random quote

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

// Prints a random quote to the page

function printQuote() {
  let quote = getRandomQuote();
  let html = '';

  html = '<p class="quote">' + quote.quote + '</p>';

  document.getElementById('quote-box').innerHTML = html;
  setColor();
}

// Click the event listener to print to the page

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);

// Helpers
function getRandomColor() {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
function setColor() {
  document.getElementsByTagName(
    'body'
  )[0].style.backgroundColor = getRandomColor();
}
