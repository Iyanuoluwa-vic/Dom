//insertBefore is used to insert an element before a existing element

const unordedList = document.querySelector(".ul");

const bodyDiv = document.createElement("div");
const bodyDivText = document.createTextNode("I am a new div");

bodyDiv.appendChild(bodyDivText);

document.body.insertBefore(bodyDiv, unordedList);
