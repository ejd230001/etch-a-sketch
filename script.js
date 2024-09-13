const head = document.querySelector("head");
const itemStyle = document.createElement("style");
itemStyle.textContent = `
    .items {
        flex-basis: calc(100% / 16);
    }`
head.appendChild(itemStyle);

for (let i = 0; i < 256; i++) {
    const container = document.querySelector(".container");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "items");
    container.appendChild(newDiv);
}

const itemList = document.querySelectorAll(".items");
itemList.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        item.classList.add("color");
    })
})

const body = document.querySelector("body");
const button = document.createElement("button");
body.appendChild(button);
button.textContent = "New";
button.addEventListener("click", newGrid);

function newGrid(event) {
    let size = prompt("Size of new grid: ");

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
        const container = document.querySelector(".container");
        container.appendChild(newItemDiv);
    }

    const newItemList = document.querySelectorAll(".items");
    newItemList.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.classList.add("color");
        })
    })
}