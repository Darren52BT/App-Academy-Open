export const createCommentSection = () => {
  const container = document.querySelector(".container");

  const commentForm = createCommentForm();
  const commentsList = createCommentsList();

  container.appendChild(commentForm);
  container.appendChild(commentsList);
  //restore comments
  restoreComments();
  //restore input if possible
  restoreCommentInput();
};

const createCommentsList = () => {
  // Create comments section
  const comments = document.createElement("div");
  comments.className = "comments";
  comments.style.border = "solid grey 1px";
  comments.style.height = "400px";
  comments.style.width = "80%";
  comments.style.margin = "10px";
  comments.style.padding = "5px";
  comments.style.overflow = "scroll";

  return comments;
};

const createCommentForm = () => {
  // Create form
  const commentForm = document.createElement("form");
  commentForm.className = "comment-form";
  commentForm.style.margin = "20px";
  commentForm.style.display = "flex";
  commentForm.style.width = "100%";
  commentForm.style.justifyContent = "center";
  commentForm.style.alignItems = "center";

  commentForm.appendChild(createCommentInput());
  commentForm.appendChild(createCommentSubmitBtn());

  return commentForm;
};

const createCommentInput = () => {
  // Create comment input
  const userCommentContainer = document.createElement("div");
  userCommentContainer.className = "user-comment-container";
  userCommentContainer.style.marginRight = "10px";

  const label = document.createElement("label");
  label.setAttribute("for", "user-comment");
  label.innerText = "Comment: ";

  const commentInput = document.createElement("input");
  commentInput.id = "user-comment";
  commentInput.name = "user-comment";
  commentInput.placeholder = "Add a comment... ";
  commentInput.required = true;

  //add input listener to save content
  commentInput.addEventListener("input", (event) => {
    storeCommentInput(event.target.value);
  });

  userCommentContainer.appendChild(label);
  userCommentContainer.appendChild(commentInput);

  return userCommentContainer;
};

const createCommentSubmitBtn = () => {
  // Create submit button
  const submitBtn = document.createElement("input");
  submitBtn.id = "submit-comment";
  submitBtn.type = "submit";
  submitBtn.value = "Submit";

  submitBtn.addEventListener("click", submitComment);

  return submitBtn;
};

const submitComment = (e) => {
  e.preventDefault();
  const commentInput = document.querySelector("#user-comment");
  const commentText = commentInput.value;
  //store comment in storage
  storeComments(commentInput.value);

  createComment(commentText);
  commentInput.value = "";
  //reset local storage comment input
  resetCommentInput();
};

const createComment = (commentText) => {
  const newCommentContainer = document.createElement("div");
  newCommentContainer.style.display = "flex";
  newCommentContainer.style.margin = "10px";

  const newComment = document.createElement("p");
  document.id = "comment-paragraph";
  newComment.innerText = commentText;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.style.marginLeft = "15px";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", (e) => {
    // Remove comment from HTML DOM
    newCommentContainer.remove();

    //get all comments in container
    let commentParagraphs = document.querySelectorAll("p");
    let commentArray = [];
    commentParagraphs.forEach((paragraph) => {
      commentArray.push(paragraph.innerText);
    });

    //reset comments in storage
    resetCommentArray();

    //store updated comments
    storeComments(...commentArray);
  });

  newCommentContainer.appendChild(newComment);
  newCommentContainer.appendChild(deleteButton);
  const comments = document.querySelector(".comments");
  comments.appendChild(newCommentContainer);
};

export const resetComments = () => {
  const comments = document.querySelector(".comments");
  Array.from(comments.children).forEach((child) => child.remove());
  //reset comments storage
  resetCommentArray();
};

//get comments from local storage

function getComments() {
  return localStorage.getItem("comments");
}
//store comment in local storage

function storeComments(...new_comments) {
  let comments = getComments();
  comments = comments ? JSON.parse(comments) : [];
  for (let comment of new_comments) {
    comments.push(comment);
  }

  localStorage.setItem("comments", JSON.stringify(comments));
}

//function to restore comments
function restoreComments() {
  //flush
  let comments = getComments();
  if (comments) {
    comments = JSON.parse(comments);
    for (let comment of comments) {
      createComment(comment);
    }
  }
}

//function to reset comments
function resetCommentArray() {
  localStorage.removeItem("comments");
}

//function to get comment input
function getCommentInput() {
  return localStorage.getItem("comment_input");
}
//function to store comment input
function storeCommentInput(commentInputText) {
  localStorage.setItem("comment_input", commentInputText);
}

//function to reset comment input
function resetCommentInput() {
  localStorage.removeItem("comment_input");
}
//function to restore comment input
function restoreCommentInput() {
  let commentInputText = getCommentInput();
  if (commentInputText) {
    const commentInput = document.querySelector("#user-comment");
    commentInput.value = commentInputText;
    commentInput.innerText = commentInputText;
  }
}
