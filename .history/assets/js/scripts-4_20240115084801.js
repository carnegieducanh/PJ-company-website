// hide-show content
const more = document.querySelectorAll(".btn");
const show = document.querySelectorAll(".hide-show");
let isExpanded = false;
[...more].forEach((itemBtn) => {
    itemBtn.addEventListener("click", handleClickBtn);
});
[...show].forEach((itemShow) => {
    itemShow.addEventListener("click", handleClickBtn);
});
function handleClickBtn() {
    itemShow.classList.toggle("expanded", !isExpanded);
    // Đảo ngược trạng thái mở rộng
    isExpanded = !isExpanded;
    more.textContent = isExpanded ? "See less" : "See more";
}

// more.onclick = () => {

// };
