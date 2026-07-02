//counter app
let count = 0;
const inputElement = document.getElementById('input');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    count++;
    inputElement.textContent = count;
});

resetButton.addEventListener('click', () => {
    count =0;
    inputElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    inputElement.textContent = count;
});