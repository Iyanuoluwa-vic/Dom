//
// event bubbling -click element first then bubbles up
// event caputring -fires from the root until it reaches target
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
}

//
function stopPropagation(e) {
  e.stopPropagation();
}

list.addEventListener("click", stopPropagation);
container.addEventListener("click", showBubbling);

// list.addEventListener("click", showBubbling, { capture: true });
// container.addEventListener("click", showBubbling, { capture: true });
