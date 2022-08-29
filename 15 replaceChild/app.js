// replace child is  .replaceChild(new,old) is used to replace of child with new child
const unordedList = document.querySelector(".ul");

const bodyDiv = document.createElement("div");
const bodyDivText = document.createTextNode("I am a new div");

bodyDiv.appendChild(bodyDivText);

document.body.insertBefore(bodyDiv, unordedList);

const smallHeading = document.createElement("h5");
const smallText = document.createTextNode("this is heading 5");

smallHeading.className = "h5";

smallHeading.appendChild(smallText);

document.body.replaceChild(smallHeading, bodyDiv);
