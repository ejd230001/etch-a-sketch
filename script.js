for (let i = 0; i < 256; i++) {
    const container = document.querySelector(".container");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "items-start");
    container.appendChild(newDiv);
}

const itemList = document.querySelectorAll(".items-start");
itemList.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        item.classList.add("color");
    })
})
