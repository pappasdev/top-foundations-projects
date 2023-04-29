//? computer player logic based on using random number up to 3 starting with 1
//? random number tied to string choices
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

//? player parameter === button click set to appropriate string input
//? computer parameter === getComputerChoice function
let playRound = (player, computer) => {
    //?game logic w/ point tallying
    if (player === "rock") {
        if (computer === "rock") {
            return "It's a tie!";
        } else if (computer === "scissors") {
            human++;
            return "Player wins! Rock crushes scissors!";
        } else if (computer === "paper") {
            cpu++;
            return "Computer wins! Paper suffocates rock!";
        }
    }
    if (player === "scissors") {
        if (computer === "scissors") {
            return "It's a tie!";
        } else if (computer === "rock") {
            cpu++;
            return "Computer wins! Rock crushes scissors!";
        } else if (computer === "paper") {
            human++;
            return "Player Wins! Scissors cuts paper!";
        }
    }
    if (player === "paper") {
        if (computer === "paper") {
            return "It's a tie";
        } else if (computer === "rock") {
            human++;
            return "Player wins! Paper suffocates rock!";
        } else if (computer === "scissors") {
            cpu++;
            return "Computer wins! Scissors cuts paper!";
        }
    }
};

let result = () => {
    //?when a player or players reach 5 points, return results
    if (human === 5 && cpu < 5) {
        alert(
            `Player wins with a score of ${human}!\nFinal score: Player: ${human} | Computer: ${cpu}.`
        );
    } else if (human === 5 && cpu === 5) {
        alert(`It's a tie!\nFinal score: Player: ${human} | Computer: ${cpu}.`);
    } else if (human < 5 && cpu === 5) {
        alert(
            `Computer wins with a score of ${cpu}!\nFinal score: Computer: ${cpu} | Player: ${human}.`
        );
    }
};

//? variables are set to the buttons' class in index.HTML

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const body = document.querySelector("body");
const announcer = document.createElement('div');

//? class assigning
announcer.classList.toggle('announcer');

//? announcer box to show round results and end results after five rounds


/* EVENT LISTENERS
? set event listeners to click to run empty function that runs the game and results functions
? event listeners return each result to a string that is wrapped in <p>, and attached to a div to show a running list of each return statement  
 */

rock.addEventListener("click", function () {
    console.log(playRound("rock", getComputerChoice()));
    result();
});
paper.addEventListener("click", function () {
    console.log(playRound("paper", getComputerChoice()));
    result();
});
scissors.addEventListener("click", function () {
    console.log(playRound("scissors", getComputerChoice()));
    result();
});

/*
!DEPRECATED CODE FOR ALERT VERSION OF GAME
let game = () => {
    for (let i = 1; i <= 5; i++) {
        let selection = prompt(
            "What's your choice?",
            "Pick one: rock, paper, or scissors."
        );
        if (["paper", "rock", "scissors"].includes(selection.toLowerCase())) {
            let str = playRound(selection, getComputerChoice());
            alert(str);
        } else {
            alert("Wrong input. Try again");
        }
    }
    if (human > cpu) {
        alert(
            `Player wins with a score of ${human}!\nFinal score: Player: ${human} | Computer: ${cpu}.`
        );
    } else if (human === cpu) {
        alert(`It's a tie!\nFinal score: Player: ${human} | Computer: ${cpu}.`);
    } else {
        alert(
            `Computer wins with a score of ${cpu}!\nFinal score: Computer: ${cpu} | Player: ${human}.`
        );
    }
};
game();
*/
