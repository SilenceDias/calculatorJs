const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e)=> console.log(e.target.value));
})

function add(firstNumber, secondNumber){
    return firstNumber+secondNumber;
}
function subtract(firstNumber, secondNumber){
    return firstNumber-secondNumber;
}
function multiply(firstNumber, secondNumber){
    return firstNumber*secondNumber;
}
function divide(firstNumber, secondNumber){
    return firstNumber/secondNumber;
}
