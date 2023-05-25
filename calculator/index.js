//TODO Concatenate multiple numbers

//? calculator functions
let add = (a, b) => {
    return a + b;
};
let subtract = (a, b) => {
    return a - b;
};

let multiply = (a, b) => {
    return a * b;
};

let divide = (a, b) => {
    return a / b;
};

//? calculations to be called in use cases for operators and equals
let calculate = () => {
    if (oper === "/") {
        result = divide(firstNum, secondNum);
    }
    if (oper === "x") {
        result = multiply(firstNum, secondNum);
    }
    if (oper === "+") {
        result = add(firstNum, secondNum);
    }
    if (oper === "-") {
        result = subtract(firstNum, secondNum);
    }
    firstNum = result;
    oper = ''
    secondNum = null;
    input.textContent = result.toString();
    displayValue = result.toString().slice(0,7);
    if (input.textContent.length > 7) {
        input.textContent = result.toString().slice(0,6) + '+';
    }
    if (isNaN(result)) {
        input.textContent = 'why...';
    }
}

//? variables to hold values
var firstNum = undefined;
var oper = "";
var secondNum = undefined;
var displayValue = "";
var result = null;

//? handles numbers on the display
let input = document.querySelector("#inputText");
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (displayValue.length <= 6) {
            displayValue += number.textContent;
            input.textContent = displayValue;
        }
    });
});

//? here we assign a second number if certain conditions are met, and allow the operators to calculate if we want to chain calculations
const operators = document.querySelectorAll(".operators");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (firstNum !== undefined && oper !== undefined && displayValue !== '') {
            secondNum = Number(displayValue);   
            calculate();
        }
        oper = operator.textContent;
        firstNum = Number(displayValue);
        displayValue = '';
    });
});


const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (firstNum !== undefined && oper !== undefined && displayValue !== '') {
        secondNum = Number(displayValue); 
        calculate();
    }
});

//? resets our calculator with our variables
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNum = undefined;
    oper = "";
    secondNum = undefined;
    displayValue = ''
    input.textContent = '0';
});