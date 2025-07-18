const txt = document.querySelector("#text");
const sub = document.querySelector(".nameSubmit");
const story = document.querySelector(".output");

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const inserty = ["the soup kitchen", "Disneyland", "the White House"];
const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function random(array) {
    let rand = Math.floor(Math.random() * array.length);
    return array[rand];
}

function farToCent(temp) {
    return Math.floor((temp - 32) / 1.8);
}

function poundToStone(weight) {
    return Math.floor((weight * 14));
}

function result() {
    let newStory = storyText;
    if (txt.value !== '') {
        let name = txt.value;
        console.log(txt.value);
        newStory = newStory.replaceAll("Bob", name);
    }
    if (document.querySelector("#uk").checked) {
        let temp = farToCent(94);
        let weight = poundToStone(300);
        newStory = newStory.replaceAll("94 fahrenheit", `${temp} centigerad`);
        newStory = newStory.replaceAll("300 pounds", `${weight} stones`);
    }
    let xtext = random(insertx);
    let ytext = random(inserty);
    let ztext = random(insertz);
    newStory = newStory.replaceAll(":insertx:", xtext);
    newStory = newStory.replaceAll(":inserty:", ytext);
    newStory = newStory.replaceAll(":insertz:", ztext);
    story.textContent = newStory;
}

sub.addEventListener('submit', (event) => {
    event.preventDefault();
    result()
});