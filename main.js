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

  pixels.forEach((pixel) => pixel.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.style.backgroundColor = "blue";
    pixel.classList.add("pixel");
    pixel.addEventListener("mouseover",() => {pixel.style.backgroundColor = "black"} )
    board.appendChild(pixel);
  }
}
