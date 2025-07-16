const btn = document.querySelector("button");
const txt = document.querySelector("p");
const bod = document.querySelector("body");

btn.onclick = () => {
    if (btn.textContent == "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started!";
        txt.style.color = 'white';
        bod.style.backgroundColor = 'black';
    }
    else if (btn.textContent == "Stop machine") {
        btn.textContent = "Start machine";
        txt.textContent = "The machine is stoped!";
        txt.style.color = 'black';
        bod.style.backgroundColor = 'white';
    }
}