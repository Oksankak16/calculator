const number=document.querySelectorAll('.calc .number button');
const display=document.querySelector('.calc .display');
const action=document.querySelectorAll('.calc .action button');
const result=document.querySelector('.calc .result button');
number.forEach(buttonNumber=>buttonNumber.addEventLister('click', numPress));
function numPress(ev){
const number=ev.target.innerText;
}