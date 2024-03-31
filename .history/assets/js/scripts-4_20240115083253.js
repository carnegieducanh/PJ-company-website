// hide-show content
let isExpanded = false;
more.onclick = () => {
    show.classList.toggle("expanded", !isExpanded);
    // Đảo ngược trạng thái mở rộng
    isExpanded = !isExpanded;
    more.textContent = isExpanded ? "See less" : "See more";
};

const more = document.querySelectorAll(".btn__read-more");
const show = document.querySelectorAll(".hide-show");
