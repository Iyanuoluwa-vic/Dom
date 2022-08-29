// createElement is used to create new element
// and createTextNode is used to create text for the new element
// appendChild is used insert element item
const bodyDiv = document.createElement("div");
const bodyDivText = document.createTextNode("I am a new div");

bodyDiv.appendChild(bodyDivText);

document.body.appendChild(bodyDiv);

const first = document.querySelector(".first");
console.log(first.children);
