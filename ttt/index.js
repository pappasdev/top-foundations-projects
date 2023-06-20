//? start declarations
const choiceX = document.getElementById("x");
const choiceO = document.getElementById("o");
const body = document.querySelector("body");
const tileEntries = document.querySelectorAll(".entry");
const title = document.querySelector("h1");
const reset = document.getElementById('reset');
reset.disabled = true;

const gameBoard = (() => {
    let indexEntries = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    return { indexEntries };
})();

const choice = (() => {
    let x = "X";
    let o = "O";
    let chosenX = false;
    let chosenO = false;
    let resetChoice = () => {
        choice.chosenX = false;
        choice.chosenO = false;
    }
    return {resetChoice, x, o, chosenO, chosenX};
})();

function checkWin() {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] 
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if(gameBoard.indexEntries[a] && gameBoard.indexEntries[a] === gameBoard.indexEntries[b] && gameBoard.indexEntries[a] === gameBoard.indexEntries[c]) {
            return gameBoard.indexEntries[a];
        }
    }
    //If all cells are filled with either "X" or "O", the function returns the string "tie", indicating that the game ended in a tie.
    if (!gameBoard.indexEntries.includes('')) {
        return 'tie';
    }
    //If there is no winner and the game is not a tie, the function returns null.
    return null;
}

function disableOnWin() {
    tileEntries.forEach((entry) => {
        entry.disabled = true;
    });
    choiceX.disabled = true;
    choiceO.disabled = true;
    reset.disabled = false;
}

reset.addEventListener("click", () => {
    tileEntries.forEach((entry) => {
        entry.textContent = '';
        entry.disabled = false;
    });
    gameBoard.indexEntries = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    choiceX.disabled = false;
    choiceO.disabled = false;
    reset.disabled = true;
})

choiceX.addEventListener("click", function () {
    choice.resetChoice();
    choice.chosenX = true;
    choiceX.disabled = true;
    choiceO.disabled = false;
});

choiceO.addEventListener("click", function () {
    choice.resetChoice();
    choice.chosenO = true;
    choiceX.disabled = false;
    choiceO.disabled = true;
});

tileEntries.forEach((entry, index) => {
    entry.addEventListener("click", () => {
        if (choice.chosenX) {
            if (!entry.disabled) {
                entry.disabled = true;
                gameBoard.indexEntries[index] = 'x';
                const winner = checkWin();
                if (winner) {
                    title.textContent = winner === 'tie' ? 'tie game!' : 'x wins!';
                    disableOnWin();
                }
                entry.textContent = choice.x;
            }
        } else if (choice.chosenO) {
            if (!entry.disabled) {
                entry.disabled = true;
                gameBoard.indexEntries[index] = 'o';
                const winner = checkWin();
                if (winner) {
                    title.textContent = winner === 'tie' ? 'tie game!' : 'o wins!';
                    disableOnWin();
                }
                entry.textContent = choice.o;
            }
        }
    });
});
