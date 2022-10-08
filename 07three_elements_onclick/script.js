const button = document.querySelector('.card-opener');
const cardsContainer = document.querySelector('.cards');

console.log(button);

let nextClass = 'show';

button.addEventListener('click', () => {
    if (nextClass === 'show') {
        cardsContainer.style.opacity = '0';
        nextClass = 'hide';
    } else {
        cardsContainer.style.opacity = '1';
        nextClass = 'show';
    }
})