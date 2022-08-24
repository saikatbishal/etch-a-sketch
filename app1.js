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


createSaveBtn = () => {
    const saveBtn = document.querySelector('.download-image');
    const link = document.createElement('a');
    link.download = "image.png";
    saveBtn.appendChild(link);
    const imgShow = document.querySelector('.image-show');
    // console.log(imgShow);
    const saveUrl = imgShow.querySelector('canvas').toDataURL("image/png");
    // link.href = saveUrl;
    link.setAttribute('href', saveUrl);
    link.click();

}