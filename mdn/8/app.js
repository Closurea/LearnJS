let choice = document.querySelector("select");
let par = document.querySelector(".detail");


choice.addEventListener("change", weather)

function weather() {
    let decision = choice.value;
    if (decision == 'rainy') {
        par.textContent = "Hava barani ast.";
    }
    else if (decision === "sunny") {
        par.textContent = "Hava aftabi ast.";
    }
    else {
        par.textContent = "";
    }
}