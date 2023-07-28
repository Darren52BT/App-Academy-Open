export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    document.title = "Darren's Portofolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    document.getElementsByTagName("h1")[0].innerText = "Darren";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    document.getElementsByClassName("section")[0].children[0].innerText= "I LIKE SODA";
}
