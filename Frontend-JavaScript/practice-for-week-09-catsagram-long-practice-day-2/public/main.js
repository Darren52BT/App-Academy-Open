export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.style.margin = "20px";
  img.style.maxWidth = "750px";

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.appendChild(img);

  //create get new image button

  const resetImgBtn = document.createElement("button");
  resetImgBtn.id = "reset";
  resetImgBtn.innerText = "Reset Image";

  //create upvote button
  const upvoteBtn = document.createElement("button");
  upvoteBtn.id = "upvote";
  upvoteBtn.innerText = "Upvote";
  //create downvote button
  const downvoteBtn = document.createElement("button");
  downvoteBtn.id = "downvote";
  downvoteBtn.innerText = "Downvote";
  //create score
  const score = document.createElement("h2");
  score.id = "score";
  score.innerText = "Popularity Score: 0";

  //create comment input and comment submit button, comment label
  const commentLabel = document.createElement("label");
  commentLabel.setAttribute("for", "comment_input");
  commentLabel.innerText = "Comment: ";
  const commentInput = document.createElement("input");
  commentInput.placeholder = "Add a comment ...";
  commentInput.id = "comment_input";
  const commentSubmit = document.createElement("button");
  commentSubmit.innerText = "Submit";

  //create container to store them
  const commentContainer = document.createElement("div");
  commentContainer.append(commentLabel, commentInput, commentSubmit);
  commentContainer.style.display = "flex";
  commentContainer.style.gap = "20px";
  commentContainer.style.margin = "20px auto";
  //create comment list container
  const commentList = document.createElement("ul");
  commentList.id = "comment_list";
  commentList.style.width = "80vw";
  commentList.style.minHeight = "15rem";
  commentList.style.border = "1px solid black";

  //attach reset function to reset btn
  resetImgBtn.addEventListener("click", reset);

  //attach downvote and upvote functions

  upvoteBtn.addEventListener("click", upVote);
  downvoteBtn.addEventListener("click", downVote);

  //attach add comment function
  commentSubmit.addEventListener("click", addComment);
  //add to container

  //add score
  container.append(score);
  //add buttons to inner container, add to main container
  let buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "20px";
  buttonContainer.append(upvoteBtn, downvoteBtn, resetImgBtn);
  container.append(buttonContainer);

  //add comment input container
  container.appendChild(commentContainer);

  //add comment list
  container.appendChild(commentList);

  fetchImage();
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
    const kittenImg = document.querySelector("img");
    kittenImg.src = kittenData[0].url;
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};

//reset score
function resetScore() {
  const score = document.getElementById("score");
  score.innerText = "Popularity Score: 0";
}
//reset comment input
function resetCommentInput() {
  const commentInput = document.getElementById("comment_input");
  commentInput.value = "";
  commentInput.innerText = "";
}
//reset comment list
function resetCommentList() {
  const commentList = document.getElementById("comment_list");
  commentList.innerHTML = ``;
}

//reset image button function
function reset() {
  resetScore();
  resetCommentInput();
  resetCommentList();
  fetchImage();
}

//get score
function getScore() {
  const score = document.getElementById("score");

  let rating = score.innerText.split(" ");
  rating = Number(rating[rating.length - 1]);
  return rating;
}

//set score
function setScore(num) {
  const score = document.getElementById("score");
  let scoreText = score.innerText.split(" ");
  scoreText[scoreText.length - 1] = `${num}`;
  score.innerText = scoreText.join(" ");
}

//upvote
function upVote() {
  setScore(getScore() + 1);
}
//downvote
function downVote() {
  setScore(getScore() - 1);
}

//add to comment list
function addComment() {
  const commentInput = document.getElementById("comment_input");
  let comment = commentInput.value;
  resetCommentInput();

  const commentList = document.getElementById("comment_list");

  const newComment = document.createElement("li");
  newComment.innerText = comment;
  commentList.appendChild(newComment);
}
