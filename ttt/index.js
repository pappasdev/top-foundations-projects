//? start declarations
const body = document.querySelector("body");
const entries = document.querySelectorAll(".entry");
const title = document.querySelector("h1");
const reset = document.getElementById("reset");
reset.disabled = true;

//? game logic
const gameBoard = (() => {
    let indexEntries = ["", "", "", "", "", "", "", "", ""];
    return { indexEntries };
})();

function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (
            gameBoard.indexEntries[a] &&
            gameBoard.indexEntries[a] === gameBoard.indexEntries[b] &&
            gameBoard.indexEntries[a] === gameBoard.indexEntries[c]
        ) {
            return gameBoard.indexEntries[a];
        }
    }
    //If all cells are filled with either "X" or "O", the function returns the string "tie", indicating that the game ended in a tie.
    if (!gameBoard.indexEntries.includes("")) {
        return "tie";
    }
    //If there is no winner and the game is not a tie, the function returns null.
    return null;
}

function disableOnWin() {
    entries.forEach((entry) => {
        entry.disabled = true;
    });
    reset.disabled = false;
}

reset.addEventListener("click", () => {
    entries.forEach((entry) => {
        entry.textContent = "";
        entry.disabled = false;
        title.textContent = 'tic tac toe';
    });
    gameBoard.indexEntries = ["", "", "", "", "", "", "", "", ""];
    reset.disabled = true;
});

let isX = true;
entries.forEach((entry, index) => {
    entry.addEventListener("click", () => {
        entry.textContent = isX ? 'x': 'o';
        isX = !isX;
        if (entry.textContent === "x") {
            gameBoard.indexEntries[index] = "x";
            const winner = checkWin();
            if (winner) {
                title.textContent = winner === "tie" ? "tie game!" : "x wins!";
                disableOnWin();
            }
        } else if (entry.textContent === "o") {
            gameBoard.indexEntries[index] = "o";
            const winner = checkWin();
            if (winner) {
                title.textContent = winner === "tie" ? "tie game!" : "o wins!";
                disableOnWin();
            }
        }
        entry.disabled = true;
    });
});
