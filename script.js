const container = document.querySelector(".container");
let size = 16;

buildBoard(size);

function buildBoard(size) {
    gridSize = size * size;
    for (i = 0; i < gridSize; i++) {
        const boxWidth = (1 / size) * 100;
        const boxHeight = (1 / size) * 100;
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = boxWidth + "%";
        box.style.height = boxHeight + "%";
        box.style.border = "1px solid black";
        container.appendChild(box);

        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        }); 
  }
}

