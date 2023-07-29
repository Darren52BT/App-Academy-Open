// Your code here

window.addEventListener("DOMContentLoaded", () => {
  let addButton = document.getElementById("add");
  let shoppingList = document.getElementById("shopping-list");
  let options = document.getElementById("type");
  //add click listener to add button to add the current type to the list
  addButton.addEventListener("click", (e) => {
    //prevent submission default to stop rerendering
    e.preventDefault();
    let choice = options.value;
    let newListItem = document.createElement("li");
    newListItem.innerText = choice;
    newListItem.setAttribute("data-type", choice);
    shoppingList.appendChild(newListItem);
  });
});
