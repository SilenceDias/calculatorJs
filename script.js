const display = document.querySelector(".display");
display.textContent = '0';


let firstNumber = '';
let secondNumber = '';
let operation = '';
let end = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const operations = ['+', 'X', '/', '-'];

function add(firstNumber, secondNumber){
    return (+firstNumber) + (+secondNumber);
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

function clear(){
    firstNumber = '';
    secondNumber = '';
    operation = '';
    end = false;
    display.textContent = '0';
}
const clearAllButton = document.querySelector("#clear");
clearAllButton.addEventListener("click", clear);
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event)=> {
        if(event.target.value == 'C') return;
        const key = event.target.value;
        if(digits.includes(key)){
            if(secondNumber === '' && operation === ''){
                firstNumber += key;
                display.textContent = firstNumber;
               
            }
            else if(firstNumber!=='' && secondNumber!=='' && end){
                secondNumber = key;
                end = false;
                display.textContent = secondNumber;
            }
            else{
                secondNumber+=key;
                display.textContent = secondNumber;
            }
            return;
            
        }
        else if(operations.includes(key)){
            operation = key;
            display.textContent = operation;
            return;
        }
        // if(key === '.' && secondNumber === ''){
        //     firstNumber += '.';
        // }
        // else{
        //     secondNumber+='.';
        // }
        if(key === '='){
            switch(operation){
                case '+':
                    firstNumber = add(firstNumber, secondNumber);
                    break;
                case '-':
                    firstNumber = subtract(firstNumber, secondNumber);
                    break;
                case 'X':
                    firstNumber = multiply(firstNumber, secondNumber);
                    break;
                case '/':
                    if(secondNumber === '0'){
                        display.textContent = 'Error';
                        firstNumber = '';
                        secondNumber = '';
                        operation = '';
                        return;
                    }
                    firstNumber = divide(firstNumber, secondNumber);
                    break;
            }
            end = true;
            display.textContent = firstNumber;
        }
        
    }
    );
})

