const container = document.querySelector('.container');
const buttonGenerator = document.querySelector('#generator');

function generateNumber() {
  return 10 + Math.floor(Math.random() * 90);
}

function getHexColor() {
  let randomColor = '#';
  for (let i = 0; i < 6; i += 1) {
    const code = Math.floor(Math.random() * 16).toString(16);
    randomColor += code;
  }
  return randomColor;
}

function generateSquares() {
  for (let i = 0; i < generateNumber(); i += 1) {
    const newBlock = document.createElement('div');
    newBlock.style.backgroundColor = `${getHexColor()}`;
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
