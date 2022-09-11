// submit event listner
// prevent default so as to prevent it from refreshing when submitted
// how to get the value

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
  console.log(name.value);
  console.log(password.value);
});
