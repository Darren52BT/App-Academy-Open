// Your code here

window.addEventListener("DOMContentLoaded", () => {
  alert("DOM has loaded");
  //make input element background red when input value is red
  let redInput = document.getElementById("red-input");
  const redInputFunc = (event) => {
    if (event.target.value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "transparent";
    }
  };

  redInput.addEventListener("input", redInputFunc);

  //make add-item trigger list item appendation with value from input

  let listAdd = document.getElementById("list-add");
  let addItem = document.getElementById("add-item");
  let ul = document.querySelector("#section-2 > ul");

  let addItemFunc = () => {
    let newListItem = document.createElement("li");
    newListItem.innerText = listAdd.value;

    ul.appendChild(newListItem);
  };
  addItem.addEventListener("click", addItemFunc);

  //when new color is selected in color selct, change background color of section

  let colorSelect = document.getElementById("color-select");
  let section3 = document.getElementById("section-3");
  let colorSelectFunc = (event) => {
    color = event.target.value;
    section3.style.backgroundColor = color;
  };
  colorSelect.addEventListener("input", colorSelectFunc);

  //when remove listeners is clicked, all other event listeners should be removed

  let removeListeners = document.getElementById("remove-listeners");
  removeListeners.addEventListener("click", () => {
    redInput.removeEventListener("input", redInputFunc);
    addItem.removeEventListener("click", addItemFunc);
    colorSelect.removeEventListener("input", colorSelectFunc);
  });

  //bonus one
  let addListeners = document.getElementById("add-listeners");
  addListeners.addEventListener("click", () => {
    redInput.addEventListener("input", redInputFunc);
    addItem.addEventListener("click", addItemFunc);
    colorSelect.addEventListener("input", colorSelectFunc);
  });

  //bonus 2
  let div = document.querySelector("#section-5 div");
  div.addEventListener(
    "mouseover",
    () => (div.innerText = "You are hovering over me")
  );

  div.addEventListener("mouseleave", () => {
    div.innerText = "You are not hovering over me";
  });
});

//bonus 3
window.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    alert("YOU CLICKED THE SPACEBAR OMG");
  }
});
