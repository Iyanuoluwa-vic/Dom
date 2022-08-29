// className give you opppotunity to display class value and change class value
const first = document.querySelector(".first");

const classValue = first.className;
console.log(classValue);

// chananging the class value
const second = document.querySelector(".second");
console.log(second.className);
second.className = "Changing the class value";
console.log(second.className);

// this add to the class name what was there before
second.classList.add("micheal", "james");
console.log(second.className);

// this is to remove a specified value to be removed
second.classList.remove("james");
console.log(second.className);
