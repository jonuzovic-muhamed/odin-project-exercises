const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Creating the red Paragraph
let redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "Red";
container.appendChild(redParagraph);

// Creating the blue Header
let blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "Blue";
container.appendChild(blueHeader);

// Creating the pink Div
let pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "background-color: Pink; border: black solid 2px; height: 400px; padding: 40px;");

// Creating pink Div Contents
let pinkDivHeader = document.createElement("h1");
pinkDivHeader.textContent = "I'm in a div";
pinkDiv.appendChild(pinkDivHeader);

// Creating pink Div Paragraph
let pinkDivParagraph = document.createElement("p");
pinkDivParagraph.textContent = "ME TOO!";
pinkDiv.appendChild(pinkDivParagraph);

// Add Pink Div to Container
container.appendChild(pinkDiv);