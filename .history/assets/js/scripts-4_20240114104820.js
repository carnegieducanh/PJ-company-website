let isExpanded = false;
more.onclick = () => {
    show.classList.toggle("expanded");
    // isExpanded = !isExpanded;
    more.textContent = isExpanded ? "See less" : "See more";
};
