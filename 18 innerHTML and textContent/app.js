// textContent return or set text in an element
// innerHTML return the inner html from an element
const list = document.getElementById("first");
const div = document.getElementById("second");
const items = document.querySelector(".items");

console.log(div.textContent);
console.log(list.innerHTML);

const ul = document.createElement("ul");
ul.innerHTML = "<li>list items </li>";
document.body.appendChild(ul);
