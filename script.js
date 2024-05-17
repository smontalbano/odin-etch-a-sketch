const container = document.querySelector(".container");
buildBoard();

function buildBoard() {
  for (i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.border = "1px solid black";
    container.appendChild(box);

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
  }
}

