function startApp(){
    'use strict';

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', changeRigth);
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', changeLeft);

var name = document.getElementById('container__name').innerHTML;
var user = document.getElementById('container__user').innerHTML;


function changeRigth() {    
    document.getElementById('container__user').innerHTML = name;
    document.getElementById('container__name').innerHTML = user;
}

function changeLeft() {
    document.getElementById('container__name').innerHTML = name;
    document.getElementById('container__user').innerHTML = user;
}

}