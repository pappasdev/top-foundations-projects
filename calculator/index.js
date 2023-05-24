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

//? variables to hold values
var firstNum = 0;
var oper = "";
var secondNum = 0;
var displayValue = "";
var operationChoice = null;

//? numbers input to screen
let input = document.querySelector("#inputText");
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        input.textContent = number.textContent;
        displayValue = number.textContent;
        if (firstNum !== undefined && oper !== undefined) {
            secondNum = Number(displayValue);
        }
    });
});

//? stores out first number selection and operator
const operators = document.querySelectorAll(".operators");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        oper = operator.textContent;
        firstNum = Number(displayValue);
    });
});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (oper === "/") {
        operationChoice = divide(firstNum, secondNum);
    }
    if (oper === "x") {
        operationChoice = multiply(firstNum, secondNum);
    }
    if (oper === "+") {
        operationChoice = add(firstNum, secondNum);
    }
    if (oper === "-") {
        operationChoice = subtract(firstNum, secondNum);
    }
    input.textContent = operationChoice;
});

//? AC button
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNum = 0;
    secondNum = 0;
    input.textContent = "0";
});
