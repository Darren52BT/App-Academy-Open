import { resetScore } from "./score.js";
import { resetComments } from "./comments.js";

export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.style.margin = "20px";
  img.style.maxWidth = "750px";

  const newKittenBtn = createNewKittenBtn();

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.append(newKittenBtn);
  container.appendChild(img);

  restoreImage();
};

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImgUrl = kittenData[0].url;
    const kittenImg = document.querySelector("img");
    kittenImg.src = kittenImgUrl;

    //set new image in storage
    storeImage(kittenImg.src);
    // After the image is finished loading, reset the score and comments
    kittenImg.addEventListener("load", () => {
      resetScore();
      resetComments();
    });
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};

const createNewKittenBtn = () => {
  // Create "New Kitten" button
  const newKittenBtn = document.createElement("button");
  newKittenBtn.id = "new-kitten";
  newKittenBtn.innerText = "New Kitten";
  newKittenBtn.addEventListener("click", fetchImage);
  return newKittenBtn;
};

// set image in local storage

function storeImage(url) {
  localStorage.setItem("image", url);
}

//get image from local storage
function getImage() {
  return localStorage.getItem("image");
}

//restore image if possible, otherwise fetch
function restoreImage() {
  let url = getImage();
  if (url) {
    const kittenImg = document.querySelector("img");
    kittenImg.src = url;
  } else {
    fetchImage();
  }
}
