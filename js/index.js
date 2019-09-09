const number = document.querySelectorAll('.calc .number button');
const display = document.querySelector('.calc .display');
const action = document.querySelectorAll('.calc .action button');
const clean = document.querySelector('.calc .clean');
const back = document.querySelector('.calc .back');
const result = document.querySelector('.calc .result');
const button = document.querySelectorAll('button');
// style
display.style.color = 'red';
display.style.backgroundColor = 'yellow';
// action.style.color='blue';
number.forEach(buttonNumber=>buttonNumber.addEventListener('click', numPress));
function numPress(ev) {
    const num = ev.target.innerText;
    display.value += num;
}
action.forEach(buttonAction=>buttonAction.addEventListener('click', actionPress));
function actionPress(ev) {
    // for(let i = 3; i<action[i]; i++)
    // {
    //  if(display.value.includes(action[i].innerText))
    const act = ev.target.innerText;
    display.value += act;
}
// }
clean.addEventListener('click', ()=>display.value = '');
back.addEventListener('click', backNumber);
function backNumber() {
    display.value = display.value.substring(0, display.value.length - 1);
}
result.addEventListener('click', ()=>display.value = eval(display.value));
// result.addEventListener('click', showResult);
// function showResult(){
//     if(eval(display.value)==undefined)
//     {
//         display.value='0,00';
//     }
//     display.value=eval(display.value);
// }
