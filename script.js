let disp = document.getElementById('disp');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let divide = document.getElementById('division');
let mult = document.getElementById('multiplication');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let equalsto = document.getElementById('equalsto');

function handler(){
  disp.textContent += this.value;

}

function handler2(){

  if(disp.textContent.includes('+')){

    let sum = disp.textContent.split('+').map((item) => +item).reduce((prev,curr) => prev + curr,0);

    disp.textContent = sum;
  }

  else if(disp.textContent.includes('-')){

    let subt = disp.textContent.split('-').map((item) => +item);

    let final = subt[0] - subt[1];

   disp.textContent = final;
  }

  else if(disp.textContent.includes('*')){

    let subt = disp.textContent.split('*').map((item) => +item);

    let final = subt[0] * subt[1];

   disp.textContent = final;
  }

  else if(disp.textContent.includes('/')){

    let subt = disp.textContent.split('/').map((item) => +item);

    let final = subt[0] / subt[1];

   disp.textContent = final;
  }
}

one.addEventListener('click',handler);
two.addEventListener('click',handler);
three.addEventListener('click',handler);
four.addEventListener('click',handler);
five.addEventListener('click',handler);
six.addEventListener('click',handler);
seven.addEventListener('click',handler);
eight.addEventListener('click',handler);
nine.addEventListener('click',handler);
zero.addEventListener('click',handler);
divide.addEventListener('click',handler);
mult.addEventListener('click',handler);
plus.addEventListener('click',handler);
minus.addEventListener('click',handler);
equalsto.addEventListener('click',handler2);
