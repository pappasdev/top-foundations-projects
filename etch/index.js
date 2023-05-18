const container = document.querySelector("#container");
const containerSize = Math.min(500, 500);

//? this function generates a grid, as you can tell by the name.
function grid() {
    //? this can technically work as expected with any number, but I decided to cap it at 100 as a personal preference.
    let gChoice = prompt("Enter a number 50-100.", "50");
    if (gChoice > 100 || gChoice < 50) {
        alert("Only accept numbers 50-100. Default grid has been made.");
        gChoice = 50;
    }
    /* 
    ? add constraints so divs fill in evenly inside the square container no matter the user input.
    ? this was the hardest part to figure out because... math. i can't take credit for the 1:1 grid sizing formula.
    ? my own solution worked to a degree, but would go from square to rectangle as the input got bigger
    */
    const gridSize = Math.floor(containerSize / gChoice);
    const containerWidth = gridSize * gChoice;
    const containerHeight = gridSize * gChoice;
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
    //? standard loop to generate based on user input.
    for (let i = 0; i < gChoice * gChoice; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${gridSize}px`;  //? based on earlier formula
        square.style.height = `${gridSize}px`; //? based on earlier formula
        container.appendChild(square);
        //? apply new background color to provide painting effect with mouse.
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#000000";
        });
    }
    gridChoice.disabled = true;
    reset.disabled = false;
}

const gridChoice = document.querySelector("#gridChoice");
gridChoice.addEventListener("click", grid);

//? reset removes all of the divs and re-enables creation of a new grid.
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
