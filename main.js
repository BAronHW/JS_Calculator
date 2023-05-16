const numbtns = document.querySelectorAll(".btn");
const clearbtn = document.getElementById("clearbtn");
const deletebtn = document.getElementById("deletebtn");
const currentop = document.getElementById('current-operation');
const prevop = document.getElementById('prev-operation');

numbtns.forEach((button)=>{
    console.log(button.innerHTML);
    button.addEventListener("click", () => {
        appendNumber(parseInt(button.innerHTML));
    });
});

clearbtn.addEventListener("click", () => {
    clear();
})

deletebtn.addEventListener("click", () => {
    deletenum();
});

function appendNumber(num){
    currentop.textContent += num;
}

function clear(){
    currentop.textContent = "";
    prevop.textContent = "";
}

function deletenum(){
    let current = currentop.textContent.toString();
    let processednum = current.substring(0, current.length - 1); 
    currentop.textContent = processednum;
}
