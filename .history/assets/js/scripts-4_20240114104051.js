more.onclick = () => {
    show.classList.toggle("expanded");
    // more.textContent = "See less";
    more.classList.toggle("less");
    const less = document.getElementsByClassName("less");
    if (less) {
        less.textContent = "See less";
    }
};
