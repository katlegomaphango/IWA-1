const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

const number = document.querySelector('[data-key="number"]');
const add = document.querySelector('[data-key="add"]');
const subtract = document.querySelector('[data-key="subtract"]');

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);