const container = document.querySelector('.container');
const mainBlock = document.getElementById('main-block');
const childBlock = document.getElementById('child-block');
const numberOne = mainBlock.childNodes[1];

container.style.display = 'flex';
container.style.justifyContent = 'center';

mainBlock.style.backgroundColor = 'green';
mainBlock.style.display = 'flex';
mainBlock.style.position= 'relative';
mainBlock.style.justifyContent = 'center';
mainBlock.style.alignItems = 'center';
mainBlock.style.width = '50rem';
mainBlock.style.height = '50rem';

childBlock.style.backgroundColor = 'blue';
childBlock.style.width = '25rem';
childBlock.style.height = '25rem';

numberOne.style.position = 'absolute';
numberOne.style.top = '0';
numberOne.style.left = '0';