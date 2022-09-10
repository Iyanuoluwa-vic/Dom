// another way to select a queryselector other than name is the event
// event.currentTarget type tell you what kind of event is used which select the element
// precentDefault() prevent default behvior of the element

// the event.target  The target event property returns the specific element that triggered the event.

// opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.

const heading = document.querySelector("h1");
const link = document.querySelector("#link");

heading.addEventListener("click", function (event) {
  // event.currentTarget.classList.add("blue");
  event.target.classList.add("blue");
  console.log(event.type);
});

link.addEventListener("click", function (event) {
  event.preventDefault();
});
