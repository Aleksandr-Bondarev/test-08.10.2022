const container = document.querySelector('.container');
const buttonGenerator = document.querySelector('#generator');

function generateNumber() {
  return 10 + Math.floor(Math.random() * 90);
}

function generateSquares() {
  for (let i = 0; i < generateNumber(); i += 1) {
    const newBlock = document.createElement('div');
    newBlock.style.backgroundColor = `#${generateNumber()}${generateNumber()}${generateNumber()}`;
    newBlock.classList.add('card');
    container.appendChild(newBlock);
  }
}

function clearContainer() {
  const children = container.children;
  for (let i = 0; i < children.length; i += 1) {
    if (children[i].id !== 'generator') {
      container.removeChild(children[i]);
    }
  }
}

window.onload = () => {
  generateSquares();
};

buttonGenerator.addEventListener('click', () => {
  clearContainer();
  generateSquares();
});
