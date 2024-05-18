const container = document.querySelector(".container");
const radioButtons = document.querySelector(".radioButtons");
const changeSize = document.querySelector(".grid-button");
let size = 16;
buildBoard(size);

radioButtons.addEventListener("change", () => {
    removeBoard();
    buildBoard(size);
})

changeSize.addEventListener("click", () => {
    size = prompt("Enter size of grid:", size);
    removeBoard();
    buildBoard(size);
})

function buildBoard(size) {
    let colorMode = document.querySelector("#rainbow").checked;
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
            if (colorMode === true){
                let color = getColor();
                box.style.backgroundColor = color;
            } else {
                box.style.backgroundColor = "black";
            }
        });
    };
}

function removeBoard(){
    const content = document.getElementsByClassName("box");
    while (content.length > 0) {
        content[0].remove()
    }
}

function getColor(){
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}

