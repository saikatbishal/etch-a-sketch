let number = document.querySelector(".size-input").value;

function populateDiv() {

  let amount = number * number;
  let board = document.querySelector('.container');


  let squares = document.querySelectorAll('.square');
  squares.forEach((div) => div.remove());   

  
  board.style.gridTemplateColumns = `repeat(${number},1fr)`;
  board.style.gridTemplateRows = `repeat(${number},1fr)`;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.border = "1px solid rgba(220,220,220,0.5)";
    square.classList.add("square");
    board.insertAdjacentElement("beforeend", square);
  }
}

function AppCollectionOne() {
  
  let allSquares = [...document.querySelectorAll(".square")];
  allSquares.forEach(function (square) {
    square.addEventListener("mouseover", (e) => {
      e.target.classList.add("hoverEffect");
    
    })
    square.addEventListener("mouseout", (e) => {
      e.target.classList.remove("hoverEffect");
    })
    
    square.addEventListener("click", (e) => {
      // square.onmousedown = () => 
      // if (e.target.classList.contains(`clicked-${buttonName}`))
      //   e.target.classList.remove(`clicked-${buttonName}`);
      // else
      //   e.target.classList.add(`clicked-${buttonName}`);

      square.addEventListener("mouseover", (ev) => ev.target.classList.add("clicked"));
    
    })
  })
}

let allButtons = [...document.querySelectorAll("button")];
let buttonName;