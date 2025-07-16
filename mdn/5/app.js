const btn = document.querySelector("button");
const txt = document.querySelector("#greeting");

function greet () {
    let name = prompt("what is your name?");
    txt.textContent = `Hello ${name}, nice to meet you`;
    // txt.textContent = "Hello " + name + ", nice to meet you";
}

btn.onclick = greet;