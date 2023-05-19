const container = document.querySelector("#container");
const containerSize = Math.min(500, 500);
//TODO: refactor grid function by breaking it into two functions if possible
function grid() {
    let gChoice = prompt("Enter a number 50-100.", "50");
    if (gChoice > 100 || gChoice < 50) {
        alert("Only accept numbers 50-100. Default grid has been made.");
        gChoice = 50;
    }
    const gridSize = Math.floor(containerSize / gChoice);
    const containerWidth = gridSize * gChoice;
    const containerHeight = gridSize * gChoice;
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;

    for (let i = 0; i < gChoice * gChoice; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${gridSize}px`;
        square.style.height = `${gridSize}px`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#000000";
        });
    }
    gridChoice.disabled = true;
    reset.disabled = false;
}

const gridChoice = document.querySelector("#gridChoice");
gridChoice.addEventListener("click", grid);


const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        container.removeChild(square);
    });
    gridChoice.disabled = false;
    reset.disabled = true;
});
reset.disabled = true;
