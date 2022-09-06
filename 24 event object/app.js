// another way to select a queryselector other than name is the event
// event type tell you what kind of event is used
// precentDefault() prevent default behvior of the element

const heading = document.querySelector("h1");
const link = document.querySelector("#link");

heading.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

link.addEventListener("click", function (event) {
  event.preventDefault();
});
