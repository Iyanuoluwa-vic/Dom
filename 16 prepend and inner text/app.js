// innnerText create the content of the elemnt
// prepend is used to create the elemnt above it

const newElement = document.createElement("div");

newElement.innerText = "This is a div";

document.body.prepend(newElement);
