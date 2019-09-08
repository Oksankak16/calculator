const number=document.querySelectorAll('.calc .number button');
const display=document.querySelector('.calc .display');
const action=document.querySelectorAll('.calc .action button');
const clean=document.querySelector('.calc .clean');
const result=document.querySelector('.calc .result');
number.forEach(buttonNumber => buttonNumber.addEventListener('click', numPress) );
function numPress(ev){
const num= ev.target.innerText;
display.value+=num;
}
action.forEach(buttonAction=>buttonAction.addEventListener('click', actionPress));
function actionPress(ev){
//     for(let i = 0; i<action.length; i++){
//      if(!display.value.includes(action[i].innerText))
//    {
    const act=ev.target.innerText;
    display.value+=act;
    }
// }

// }
clean.addEventListener('click',()=>display.value='');
result.addEventListener('click',()=>display.value=eval(display.value) );