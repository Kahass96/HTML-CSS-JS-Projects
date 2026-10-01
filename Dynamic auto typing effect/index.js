const containerE1 = document.querySelector(".container")

const careers = ["YouTube", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText() {
containerE1.innerHTML = `<h1>I am a YouTuber${careers[careerInde].slice(0,characterIndex)}</h1>`;
characterIndex++
setTimeout(updateText, 400);

}