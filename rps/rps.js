/*
? computer player logic based on using random number up to 3 starting with 1
? random number tied to string choices 
*/
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    }
};

//? score kept in these global variables to be utilized in different areas
var human = 0;
var cpu = 0;

/* 
? game logic w/ point tallying
? player parameter is a button click set to appropriate string input
? computer parameter is the function getComputerChoice() 
*/
let playRound = (player, computer) => {
    if (player === "rock") {
        if (computer === "rock") {
            return "Nothing happens... because it's a tie. Try again!";
        } else if (computer === "scissors") {
            human++;
            return "The player's rock crushes the computer's scissors!";
        } else if (computer === "paper") {
            cpu++;
            return "The computer's paper wraps the player's rock and self-destructs!";
        }
    }
    if (player === "scissors") {
        if (computer === "scissors") {
            return "Nothing happens... because it's a tie. Try again!";
        } else if (computer === "rock") {
            cpu++;
            return "The computer's rock crushes the player's scissors!";
        } else if (computer === "paper") {
            human++;
            return "The player's scissors cuts the computer's paper into shreds!";
        }
    }
    if (player === "paper") {
        if (computer === "paper") {
            return "Nothing happens... because it's a tie. Try again!";
        } else if (computer === "rock") {
            human++;
            return "The player's paper wraps the computer's rock and self-destructs!\r\n";
        } else if (computer === "scissors") {
            cpu++;
            return "The computer's scissors cuts the player's paper into shreds!\r\n";
        }
    }
};

//? when a player or players reach 5 points, return results
let result = () => {
    if (cpu === 5 || human === 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("reset").disabled = false;
    }
    if (human === 5) {
        return `Player wins!`;
    } else if (cpu === 5) {
        return `Computer wins!`;
    }
};

//? function ran through reset button on click
let resetGame = () => {
    human = 0;
    cpu = 0;
    roundResult.textContent = "";
    points.textContent = "Make a choice to start the game";
    finalResult.textContent = "";
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("reset").disabled = true;
};

//? function keeps track of score and provides final result
let scoreTracker = () => {
    points.innerHTML = `Player: ${human}` + "<br>" + `Computer: ${cpu}`;
    finalResult.textContent = result();
};

//? variables set to provide web functionality
const body = document.querySelector("body");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const announcer = document.createElement("div");
const roundResult = document.createElement("p");
const finalResult = document.createElement("p");
const points = document.createElement("p");
const reset = document.createElement("button");
const buttons = document.querySelector(".buttons");
const game = document.querySelector(".game");
const footer = document.querySelector("footer");

//? class assigning
announcer.classList.toggle("announcer");
roundResult.classList.toggle("roundResult");
finalResult.classList.toggle("endResult");
points.classList.toggle("points");
reset.id = "reset";

//? announcer box that shows round results and final results after five rounds
buttons.appendChild(reset);
game.appendChild(announcer);
announcer.appendChild(points);
announcer.appendChild(roundResult);
game.appendChild(footer);
game.appendChild(finalResult);

/* EVENT LISTENERS
? set event listeners to click to a function that runs the game and results functions
? event listeners return each result to a string that is wrapped in <p> that is attached to a div to show a running list of results 
*/

rock.addEventListener("click", function () {
    roundResult.textContent = playRound("rock", getComputerChoice());
    scoreTracker();
});
paper.addEventListener("click", function () {
    roundResult.textContent = playRound("paper", getComputerChoice());
    scoreTracker();
});
scissors.addEventListener("click", function () {
    roundResult.textContent = playRound("scissors", getComputerChoice());
    scoreTracker();
});
reset.addEventListener("click", resetGame);

//? Settings that automatically load on page view
window.onload = function () {
    document.getElementById("reset").disabled = true;
    reset.textContent = "Reset";
    points.textContent = "Make a choice to start the game";
};