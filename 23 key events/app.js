// KeyboardEvent events just indicate what interaction the user had with a key on the keyboard at a low level, providing no contextual meaning to that interaction\

const nameInput = document.getElementById("name");

// nameInput.addEventListener("keypress", function () {
//   console.log("this is an imput");
// });

// nameInput.addEventListener("keyup", function () {
//   console.log("this is an imput");
// });

nameInput.addEventListener("keyup", function () {
  console.log(nameInput.value);
});
