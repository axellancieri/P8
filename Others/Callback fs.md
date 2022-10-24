======================================================
<!-- Anonymous Functions -->
======================================================

Had this to begin this, now converting to anonymous..

function sayHello() {
    console.log('Hello');
}

function executeCallback(callback) {
  callback();
}

executeCallback(sayHello);

.. Now it has an anonymous function within

function executeCallback(callback) {
  callback();
}

executeCallback(function sayHello() {
    console.log('Hello');
});



======================================================
<!-- Converting anonymous functions to arrow functions -->
======================================================
function sayHello() {
    console.log('Hello');
}

to

() => {
    console.log('Hello');
}

======================================================
<!-- synthetize arrow functions -->
======================================================
if there's a single line of code you can remove the curly brases

executeCallback(() => {
    console.log('Hello');
});

to

executeCallback(() => console.log('Hello'));

======================================================
<!-- setInterval setTimeut -->
======================================================

const clockSection = document.getElementById("clock");

function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();

  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${hh}:${mm}:${ss}`;
}

function tickClock() {
  clockSection.textContent = getTime();
}

tickClock();
setInterval(tickClock, 1000);

======================================================
<!-- Callback with more than 1 argument -->
======================================================

 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
    element.style.backgroundColor = "green";
}

function addStyleToElement(element, callback) {
    callback(element);
}




addStyleToElement(div1, makeRed);
addStyleToElement(div2, makeBlue);
addStyleToElement(div3, makeGreen);

======================================================
<!-- Same callback on multiple elements -->
======================================================
We had this

const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

nameInput.addEventListener('blur', event => {
  event.target.className = '';
});

messageTextArea.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

messageTextArea.addEventListener('blur', event => {
   event.target.className = '';
});


Using callback we refactored it DRY

const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
  event.target.className = 'highlight';
};

const blurHandler = event => {
  event.target.className = '';
};



nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);

