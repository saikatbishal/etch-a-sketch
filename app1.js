let color = `black`;
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
        square.addEventListener('mouseover', () => square.style.backgroundColor = `${color}`);
        square.style.backgroundColor = `white`;
        square.style.border = "1px solid rgba(220,220,220,0.5)";
        board.insertAdjacentElement("beforeend", square);
    }
}
populateBoard(16);
function changeSize(input)
{
    // let input = document.querySelector(".size-input").value;
    if (input > 2 && input <= 500)
    {
        populateBoard(input);
    }
    else {
        console.log("Please select between 2 and 500");
    }
}
function setColor(choice)
{
    color = choice;
}
function colorSquares()
{
    if (click)
    {
    if (color === "random")
    {
        this.style.backgroundColor = `hsl(${Math.random() * 360}%,100%,50%)`;

        }
    else {
        this.style.backgroundColor = color;
        }
}
}
colorSquares();


function resetBoard()
{
    let board = document.querySelector('.container');
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.backgroundColor =`white`)
}