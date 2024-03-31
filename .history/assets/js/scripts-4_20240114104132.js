more.onclick = () => {
    show.classList.toggle("expanded");
    // more.textContent = "See less";
    more.classList.toggle("less");
    const less = document.getElementsByClassName("btn btn__read-more less");
    if (less) {
        less.textContent = "See less";
    }
};
