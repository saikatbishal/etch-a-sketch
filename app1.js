let color = `black`;
let clicked = true;
let board = document.querySelector('.container');

// POPULATING THE BOARD WHEN THE SCREEN FIRES UP OR THE BOARD SIZE IS CHANGED
function populateBoard(number)
{
    let board = document.querySelector('.container');
    let squares = document.querySelectorAll('.square');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${number},1fr)`;
    board.style.gridTemplateRows = `repeat(${number},1fr)`;
    
    let amount = number * number;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = `white`;
        square.style.border = "1px solid rgba(220,220,220,0.5)";
        board.insertAdjacentElement("beforeend", square);
    }
}
let inputSize = document.querySelector(".size-input").value;
// console.log(inputSize);
populateBoard(inputSize);

document.querySelectorAll(".square").forEach((sq) => {
    sq.addEventListener("click", () => {
        console.log("square clicked"+clicked);
        clicked = !clicked;
})
})


// CHANGE NUMBER OF PIXELS INSIDE THE CANVAS
function changeSize(input)
{
    if (input > 2 && input <= 500)
    {
        populateBoard(input);
    }
    else {
        console.log("Please select between 2 and 500");
    }
} 

// SETTING COLOR CHOICE
function setColor(choice)
{
    color = choice;
}


function resetBoard() // RESET BUTTON FUNCTIONALITY
{
    let board = document.querySelector('.container');
    let squares = board.querySelectorAll('.square');
    squares.forEach((square) => square.style.backgroundColor =`white`)
}

function colorSquare() // COLORING ON PIXELS FUNCTIONALITY
{
    let sq = document.querySelectorAll('.square');
    sq.forEach((square) => {
        square.addEventListener('click', () => clicked = !clicked)
    }
    );

    if (clicked){
        if (color === "random")
        {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}
// ADDING SPLASH SCREEN FUNCTIONALITY
let splashScreen = document.querySelector('.splash-screen');
splashScreen.addEventListener('click', () => {
    splashScreen.style.display = 'none';
})


// SAVE IMAHE DRAWN BY THE USER -- NOT WORKING 
const saveImage = () => {
    const canvas = document.createElement('canvas');
    console.log(canvas);
    const ctx = canvas.getContext('2d');
    console.log(ctx);
    canvas.width = canvas.height = `500px`;
    // ctx.drawImage(board, 0, 0, canvas.width, canvas.height);
    document.body.appendChild(canvas);
}
