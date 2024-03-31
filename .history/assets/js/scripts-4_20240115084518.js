// hide-show content
const more = document.querySelectorAll(".btn");
const show = document.querySelectorAll(".hide-show");
let isExpanded = false;
[...more].forEach((item) => {
    item.addEventListener("click", handleClickBtn);
});
function handleClickBtn() {
    show.classList.toggle("expanded", !isExpanded);
    // Đảo ngược trạng thái mở rộng
    isExpanded = !isExpanded;
    more.textContent = isExpanded ? "See less" : "See more";
}

// more.onclick = () => {

// };
