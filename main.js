let color = "black";
let click = false;
let penStatus = document.querySelector(".pen")

document.querySelector(".size-prompt").addEventListener("click", () => {
  let sizeValue = prompt("Enter Board size: ");
  if (sizeValue < 2 || sizeValue > 100) {
    console.log("invalid size");
    return;
  }

  createBoard(sizeValue);
});

function createBoard(size) {
  console.log("ded");
  let board = document.querySelector(".board");
  let pixels = document.querySelectorAll(".pixel");
  board.addEventListener("click", changeClick )
  pixels.forEach((pixel) => pixel.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover", colorPixel);
    board.appendChild(pixel);
  }
}
function colorPixel() {
  if(click){
    if (color == "random") this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    else this.style.backgroundColor = color;
  }
}

function changeColor(colorInput) {
  color = colorInput;
}

function resetBoard() {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => pixel.remove());
}
function changeClick(){

  click = !click
  // if(click == false) click = true;
  // else click = false;

  if (click) penStatus.textContent = "Pen ✏️: ENABLED (Click board to disable!)"
  else penStatus.textContent= "Pen ✏️: Disabled (Click board to enable!)"
}