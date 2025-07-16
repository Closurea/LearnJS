const randomNumber = Math.floor(Math.random() * 3) + 1;

let guess = document.querySelector(".guessField");
let submit = document.querySelector(".guessSubmit");
let previousGuess = document.querySelector(".guesses");
let result = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHigh");

console.log(randomNumber);

function checkValue() {
    let val = Number(guess.value);
    if (val == randomNumber) {
        result.textContent = 'Correct!';
        result.style.backgroundColor = 'green';
    }
    else if (val > randomNumber) {
        lowOrHigh.textContent = 'Last guess was too high!';
        result.textContent = 'Wrong!';
        previousGuess.textContent = `previous guess: ${val}`
    }
    else {

    }
}

function restartB() {
    let rb = document.createElement('button');

    
}

submit.addEventListener('click', checkValue);