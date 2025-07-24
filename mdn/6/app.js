const list = document.querySelector(".output ul");
const textBox = document.querySelector(".output p");
list.textContent = "";
textBox.textContent = "";
let total = 0;

let products = ["Shirt:20.00", "Socks:6.89", "Pants:39.89", "Underpants:14.50", "Shoes:49.99"];

for (const product of products) {
    let subArray = product.split(":");
    let name = subArray[0];
    let price = Number(subArray[1]);

    total += price;

    let toShow = `${name} — $${price}`;

    const listItem = document.createElement("li");
    listItem.textContent = toShow;
    list.appendChild(listItem);
}

textBox.textContent = `Total: $${total}`;