let board = document.querySelector('.container');
  board.style.gridTemplateColumns = "repeat(16,1fr)";
  board.style.gridTemplateRows = "repeat(16,1fr)";
  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.border = "1px solid rgba(220,220,220,0.5)";
    square.classList.add("square");
    board.insertAdjacentElement("beforeend", square);
  }
function AppCollectionOne(buttonName) {
  
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
      if (e.target.classList.contains(`clicked-${buttonName}`))
        e.target.classList.remove(`clicked-${buttonName}`);
      else
        e.target.classList.add(`clicked-${buttonName}`);

      // square.addEventListener("mouseover", (ev) => ev.target.classList.add("clicked"));
    
    })
  })
}

let allButtons = [...document.querySelectorAll("button")];
let buttonName;

allButtons.forEach((button) => {
  button.addEventListener("click", e => {
    if (e.target.classList.contains('red')) {
      // console.log('red');
      buttonName = 'red'

      // return 'red';
    }
    if (e.target.classList.contains('green')) {
      // console.log('green');
      buttonName = 'green'

      // return 'green';
    }
    if (e.target.classList.contains('blue')) {
      // console.log('blue');
      buttonName = 'blue'

      // return 'blue';
    }
    if (e.target.classList.contains('yellow')) {
      // console.log('yellow');
      // return 'yellow';
      buttonName = 'yellow'
    }
    console.log(buttonName);
    return buttonName;
  })
})
console.log('btnName = '+buttonName);
AppCollectionOne(buttonName);