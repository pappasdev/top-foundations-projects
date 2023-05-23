//? calculator functions
let add = (a,b) => {
    return a + b;
}
let subtract = (a,b) => {
    return a - b;
}

let multiply = (a,b) => {
    return a * b;
}

let divide = (a,b) => {
    return a / b;
}

//? variables for the calculator operation
let firstNum;
let operator;
let secondNum;

//? calculate input
let operate = (first, op, second) => {
     if (op == '+') {
       return add(first, second);
     }
     if (op == '-') {
        return subtract(first, second);
     }
     if (op == '*') {
        return multiply(first, second);
     }
     if (op == '/') {
        return divide(first, second);
     }
}

console.log(operate(10, '/', 5));

//? buttons input to screen
let input = document.querySelector('#inputText');
const buttons = document.querySelectorAll('.input');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        input.textContent = button.textContent;
    });
})
//? AC button
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    input.textContent = '0';
})
