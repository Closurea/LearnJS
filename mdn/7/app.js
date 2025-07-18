const text = document.querySelector("#searchText");
const btn = document.querySelector("#sub");
const list = document.querySelector(".output ul");

let datas = Array();

text.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        btn.click();
    }
})

btn.addEventListener('click', () => {
    list.textContent = ""
    if (text.value === "") {
    }
    else if (datas.length === 5) {
        datas.pop();
        datas.unshift(text.value);
    }
    else {
        datas.push(text.value);
    }
    for (const data of datas) {
        let listItem = document.createElement("li");
        listItem.textContent = data;
        list.appendChild(listItem);
    }
});