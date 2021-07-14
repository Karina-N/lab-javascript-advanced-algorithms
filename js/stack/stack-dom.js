const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {};

const renderListStack = () => {
  stackList.innerHTML = '';
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const listElement = document.createElement('li');
    stackList.appendChild(listElement);
    listElement.className = 'inactive';

    const latestInput = newStack.stackControl[newStack.stackControl.length - 1];
    const firstInactiveBox = document.querySelector('li, .inactive');

    if (newStack.stackControl.length != 0) {
      firstInactiveBox.innerHTML = latestInput;
      firstInactiveBox.className = 'active';
    }
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningBottomStack.setAttribute('style', 'display:block');
    warningBottomStack.innerHTML = 'underflow';
  } else if (type === 'overflow') {
    warningTopStack.setAttribute('style', 'display:block');
    warningTopStack.innerHTML = 'overflow';
  }
};

const addToStack = () => {
  try {
    newStack.push(stackInput.value);
    renderListStack();

    console.log(newStack.stackControl);

    if ((warningBottomStack.style.display = 'block')) {
      warningBottomStack.setAttribute('style', 'display:none');
    }
  } catch (error) {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  try {
    newStack.pop();
    console.log('click remove');
    renderListStack();

    if ((warningTopStack.style.display = 'block')) {
      warningTopStack.setAttribute('style', 'display:none');
    }
  } catch (error) {
    generateWarningStack('underflow');
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
