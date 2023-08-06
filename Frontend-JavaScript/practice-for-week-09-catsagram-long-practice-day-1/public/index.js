// Your code here
window.onload = async () => {
  //cat container
  let catContainer = document.createElement("div");
  catContainer.setAttribute(
    "style",
    `display: flex; flex-direction: column; justify-content: center; align-items: center;`
  );
  catContainer.classList.add("cat_container");
  //cat title
  let catTitle = document.createElement("h1");
  catTitle.innerText = "Kitten Pic";

  //cat pic
  let catImage = document.createElement("img");
  let { url, width, height } = await fetch(
    "https://api.thecatapi.com/v1/images/search"
  )
    .then((response) => response.text())
    .then((response) => JSON.parse(response))
    .then((response) => response[0]);
  catImage.setAttribute("src", url);
  catImage.setAttribute("width", width);
  catImage.setAttribute("height", height);

  catContainer.append(catTitle, catImage);
  document.body.appendChild(catContainer);
};
