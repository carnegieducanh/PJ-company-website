let isExpanded = false;
more.onclick = () => {
    show.classList.toggle("expanded");
    isExpanded = !isExpanded;
    // more.textContent = "See less";
    more.textContent = isExpanded ? "See less" : "See more";
};
