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

var human = 0;
var cpu = 0;

/* 
? game logic w/ point tallying
? player parameter === button click set to appropriate string input
? computer parameter === getComputerChoice() 
*/
let playRound = (player, computer) => {
    if (player === "rock") {
        if (computer === "rock") {
            return "It's a tie!";
        } else if (computer === "scissors") {
            human++;
            return "The player's rock crushes the computer's scissors!";
        } else if (computer === "paper") {
            cpu++;
            return "The computers's paper wraps the player's rock and self-destructs!";
        }
    }
    if (player === "scissors") {
        if (computer === "scissors") {
            return "It's a tie!";
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
            return "It's a tie!";
        } else if (computer === "rock") {
            human++;
            return "The player's paper wraps the computer's rock and self-destructs!";
        } else if (computer === "scissors") {
            cpu++;
            return "Computer's scissors cuts the player's paper into shreds!";
        }
    }
};

//?when a player or players reach 5 points, return results
let result = () => {
    if (human === 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        return `Player wins the best of five!`;
    } else if (cpu === 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        return `Computer wins the best of five!`;
    }
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

//? class assigning
announcer.classList.toggle("announcer");
roundResult.classList.toggle("roundResult");
finalResult.classList.toggle("endResult");
points.classList.toggle("points");
reset.classList.toggle("reset");

//? announcer box that shows round results and final results after five rounds
body.appendChild(announcer);
body.appendChild(reset);
announcer.appendChild(roundResult);
announcer.appendChild(points);
announcer.appendChild(finalResult);

//? default text values to prevent popping in
reset.textContent = "Reset";
points.textContent = "Player: 0 | Computer: 0";
roundResult.textContent =
    "Click on Rock, Paper, or Scissors to start the game!";

/* EVENT LISTENERS
? set event listeners to click to a function that runs the game and results functions
? event listeners return each result to a string that is wrapped in <p> that is attached to a div to show a running list of results  
*/

rock.addEventListener("click", function () {
    roundResult.textContent = playRound("rock", getComputerChoice());
    points.textContent = `Player: ${human} | Computer: ${cpu}`;
    finalResult.textContent = result();
});
paper.addEventListener("click", function () {
    roundResult.textContent = playRound("paper", getComputerChoice());
    points.textContent = `Player: ${human} | Computer: ${cpu}`;
    finalResult.textContent = result();
});
scissors.addEventListener("click", function () {
    roundResult.textContent = playRound("scissors", getComputerChoice());
    points.textContent = `Player: ${human} | Computer: ${cpu}`;
    finalResult.textContent = result();
});
reset.addEventListener("click", function () {
    human = 0;
    cpu = 0;
    roundResult.textContent =
    "Click on Rock, Paper, or Scissors to start the game!";
    points.textContent = `Player: ${human} | Computer: ${cpu}`;
    finalResult.textContent = '';
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
});
