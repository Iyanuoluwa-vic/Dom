// setItem create item
// getItem get item
//.clear() is used to clear local storage
// .removeItem() used to remove an item

localStorage.setItem("name", "john");
localStorage.setItem("job", "developer");

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");

const job = localStorage.getItem("job");
console.log(job);

localStorage.clear();
