const numbtns = document.querySelectorAll(".btn");
const clearbtn = document.getElementById("clearbtn");
const deletebtn = document.getElementById("deletebtn");
const currentop = document.getElementById('current-operation');
const prevop = document.getElementById('last-operation');
const divbtn = document.getElementById('divbtn');
const multbtn = document.getElementById('multbtn');
const subbtn = document.getElementById('subbtn');
const equalbtn = document.getElementById('eqbtn');
const decbtn = document.getElementById('decbtn');
const eqbtn = document.getElementById('eqbtn');
const addbtn = document.getElementById('addbtn');

let leftoperation = 0;
let rightoperation =0;
let currentoperation;

numbtns.forEach((button)=>{
    console.log(button.innerHTML);
    let temp = parseInt(button.innerHTML)
    button.addEventListener("click", () => {
        appendNumber(temp);
        leftoperation = currentop.textContent;
        console.log(leftoperation);
    });
});

addbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '+';
    currentop.textContent += '+';
    update();
});

subbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '-';
    currentop.textContent += '-';
    update();
});

divbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '/';
    currentop.textContent += '÷';
    update();
});

multbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '*';
    currentop.textContent += '×';
    update();
});

clearbtn.addEventListener("click", () => {
    clear();
    currentoperation = null;
})

deletebtn.addEventListener("click", () => {
    deletenum();
});

decbtn.addEventListener("click", () => {
    appenddecimal();
})

function appendNumber(num){
    if(isNaN(num) == false){
        currentop.textContent += num;
    }
}

function clear(){
    currentop.textContent = "";
    if(prevop != null){
    prevop.textContent = "";
    }
}

function deletenum(){
    let current = currentop.textContent.toString();
    let processednum = current.substring(0, current.length - 1); 
    currentop.textContent = processednum;
}

function appenddecimal(){
    let current = currentop.textContent.toString();
    if(current.includes(".") || current == 0) return;
    currentop.textContent += '.';
}

function add(leftoperation, rightoperation){
    return leftoperation + rightoperation;
}

function subtract(leftoperation, rightoperation){
    return leftoperation - rightoperation;
}

function multiply(leftoperation, rightoperation){
    return leftoperation * rightoperation;
}

function divide(leftoperation, rightoperation){
    return leftoperation / rightoperation;
}

function update(){
    prevop.textContent = currentop.textContent;
    currentop.textContent = '';
}

function operate(operator, leftoperation, rightoperation){
    leftoperation = Number(leftoperation);
    rightoperation = Number(rightoperation);
    switch(operator){
        case '+':
            return add(leftoperation, rightoperation)
        
        case '-':
            return subtract(leftoperation, rightoperation);

        case '×':
            return multiply(leftoperation, rightoperation);

        case '÷':
            return divide(leftoperation, rightoperation);
    }
}