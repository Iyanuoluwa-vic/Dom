// fuction reference

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColor() {
  let hasClass = heading.classList.contains("red");

  if (hasClass) {
    heading.classList.remove;
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changeColor);
