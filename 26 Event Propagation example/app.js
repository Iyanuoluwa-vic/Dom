// this is to show that was is dynamically added will need event propagation to see it if exist

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const heading = document.querySelector(".heading");

btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = "i'm in the heading";
  container.appendChild(element);
});

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("heading")) {
    console.log("it contain the heading");
  }
});

// heading.addEventListener("click", function () {
//   console.log("heading");
// });
