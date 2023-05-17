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
    console.log(button.innerHTML);
    let temp = parseInt(button.innerHTML)
    button.addEventListener("click", () => {
        appendNumber(temp);
        leftoperation = currentop.textContent;
        console.log(leftoperation);
    });
});

eqbtn.addEventListener("click", () => {
    operate(currentoperation,leftoperation, (currentop.textContent).toString())
    console.log(bot);
});

addbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '+';
    currentop.textContent += '+';
    console.log(leftoperation,rightoperation,currentoperation)
    update();
});

subbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '-';
    currentop.textContent += '-';
    console.log(leftoperation,rightoperation,currentoperation)
    update();
});

divbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '÷';
    currentop.textContent += '÷';
    console.log(leftoperation,rightoperation,currentoperation)
    update();
});

multbtn.addEventListener("click", () => {
    if((currentop.textContent) == 0) return;
    leftoperation = currentop.textContent;
    currentoperation = '×';
    currentop.textContent += '×';
    console.log(leftoperation,rightoperation,currentoperation)
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
    return console.log(leftoperation + rightoperation);
}

function subtract(leftoperation, rightoperation){
    return console.log(leftoperation - rightoperation);
}

function multiply(leftoperation, rightoperation){
    return console.log(leftoperation * rightoperation);
}

function divide(leftoperation, rightoperation){
    return console.log(leftoperation / rightoperation);
}

function update(){
    prevop.textContent = currentop.textContent;
    currentop.textContent = '';
}

function operate(operator, leftoperation, rightoperation){
    leftoperation = leftoperation;
    rightoperation = rightoperation;
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