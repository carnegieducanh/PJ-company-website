// hide-show content
const more = document.querySelector(".btn");
const show = document.querySelector(".hide-show");
let isExpanded = false;
[...more].forEach((itemBtn) => {
    itemBtn.addEventListener("click", handleClickBtn);
});
function handleClickBtn() {
    [...show].forEach((itemShow) => {
        itemShow.classList.toggle("expanded", !isExpanded);
        // Đảo ngược trạng thái mở rộng
        isExpanded = !isExpanded;
        itemBtn.textContent = isExpanded ? "See less" : "See more";
    });
}
