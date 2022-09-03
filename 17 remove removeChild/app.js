// remove is used to remove element
// removeChild is used to remove a child element from an element

const result = document.body.querySelector("#result");
// result.remove();

const heading = result.querySelector("h1");

result.removeChild(heading);
