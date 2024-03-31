let isExpanded = false;
more.onclick = () => {
    show.classList.toggle("expanded", isExpanded);
    // Đảo ngược trạng thái mở rộng
    isExpanded = !isExpanded;
    more.textContent = isExpanded ? "See less" : "See more";
};
