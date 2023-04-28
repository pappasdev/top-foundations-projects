let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

var human = 0;
var cpu = 0;

//? player parameter === button click set to appropriate string input
//? computer parameter === getComputerChoice function
let playRound = (player, computer) => {
    player = player.toLowerCase();
    //?game logic w/ point tallying
    if (player === "rock") {
        if (computer === "rock") {
            return "It's a tie!";
        } else if (computer === "scissors") {
            human++;
            return "Player wins! Rock crushes scissors!";
        } else {
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
        } else {
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
        } else {
            cpu++;
            return "Computer wins! Scissors cuts paper!";
        }
    }
    //?when a player or players reach 5 points, return results and end game
    if (human === 5 && cpu < 5) {
        alert(
            `Player wins with a score of ${human}!\nFinal score: Player: ${human} | Computer: ${cpu}.`
        );
    } else if (human === 5 && cpu === 5) {
        alert(`It's a tie!\nFinal score: Player: ${human} | Computer: ${cpu}.`);
    } else if (human < 5 && cpu === 5){
        alert(
            `Computer wins with a score of ${cpu}!\nFinal score: Computer: ${cpu} | Player: ${human}.`
        );
    }
};
//? variables set to the buttons' class in index.HTML
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('scissors');

//? set event listeners to click to run playRound function with appropriate string input

rock.addEventListener('click', playRound('rock', getComputerChoice));
paper.addEventListener('click', playRound('paper', getComputerChoice));
scissors.addEventListener('click', playRound('scissors', getComputerChoice));
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
