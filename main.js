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

let leftoperation;
let rightoperation;
let currentoperation;
let result;

numbtns.forEach((button)=>{
    let temp = parseInt(button.innerHTML)
    button.addEventListener("click", () => {
        appendNumber(temp);
        leftoperation = currentop.textContent;
        console.log(leftoperation);
    });
});

eqbtn.addEventListener("click", () => {
    currentop.textContent = operate(currentoperation,prevop.textContent, currentop.textContent);
    
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
    currentoperation = '÷';
    currentop.textContent += '÷';
    update();
});

multbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '×';
    currentop.textContent += '×';
    update();
});

clearbtn.addEventListener("click", () => {
    clear();
    currentoperation = null;
    leftoperation = null;
    rightoperation = null;
    result = null;
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
    
    result = leftoperation + rightoperation;
    return result
}

function subtract(leftoperation, rightoperation){
    
    result = leftoperation - rightoperation;
    return result;
}

function multiply(leftoperation, rightoperation){
    
    result = leftoperation * rightoperation;
    return result;
}

function divide(leftoperation, rightoperation){
    
    result = leftoperation / rightoperation;
    return result;
}

function update(){
    prevop.textContent = currentop.textContent;
    currentop.textContent = '';
}

function operate(operator, leftoperation, rightoperation) {
    leftoperation = parseFloat(leftoperation);
    rightoperation = parseFloat(rightoperation);
  
    switch (operator) {
      case '+':
        return add(leftoperation, rightoperation);
      case '-':
        return subtract(leftoperation, rightoperation);
      case '×':
        return multiply(leftoperation, rightoperation);
      case '÷':
        return divide(leftoperation, rightoperation);
    }
  }