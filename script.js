const head = document.querySelector("head");
const container = document.querySelector(".container");

const itemStyle = document.createElement("style");
itemStyle.textContent = `
    .items {
        flex-basis: calc(100% / 16);
    }`
head.appendChild(itemStyle);

const body = document.querySelector("body");
const button = document.createElement("button");
body.appendChild(button);
button.textContent = "New";
button.addEventListener("click", newGrid);

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "items");
    container.appendChild(newDiv);
}

const itemList = document.querySelectorAll(".items");
itemList.forEach(modifyColor)

function newGrid(event) {
    let size = prompt("Size of new grid (1-100): ");

    if (size < 1 || size > 100) {
        alert("Invalid Input");
        return;
    }
    
    const currentItems = document.querySelectorAll(".items")
    currentItems.forEach((item) => item.remove());
    const oldStyle = document.querySelector("style");
    oldStyle.remove();
    const newStyle = document.createElement("style");
    newStyle.textContent = `
        .items {
            flex-basis: calc(100% / ${size});
        }
    `
    head.appendChild(newStyle);

    for (let i = 0; i < size * size; i++) {
        const newItemDiv = document.createElement("div");
        newItemDiv.classList.add("items");
        container.appendChild(newItemDiv);
    }

    const newItemList = document.querySelectorAll(".items");
    newItemList.forEach(modifyColor);
}

function modifyColor(item) {
    item.addEventListener("mouseover", (e) => {
        if (!item.hasAttribute("style")) {
            item.style.backgroundColor = randomRGB();
        }
        else {
            let currentColor = item.style.backgroundColor;
            let currentOpacity = parseFloat(currentColor.split(',').pop().replace(')', ''));
            if (currentOpacity < 1) {
                let newOpacity = Math.min(currentOpacity + .1, 1);
                console.log(currentColor.substring(0, currentColor.length - 4) + newOpacity + ")");
                item.style.backgroundColor = currentColor.substring(0, currentColor.length - 4) + newOpacity + ")";
            }
        }
    });
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, .1)`
}

