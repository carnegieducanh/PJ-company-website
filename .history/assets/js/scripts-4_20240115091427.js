// hide-show content
const more = document.querySelectorAll(".btn");
const show = document.querySelectorAll(".hide-show");
let isExpanded = false;
[...more].forEach((itemBtn) => {
    itemBtn.addEventListener("click", handleClickBtn);
});
function handleClickBtn() {
    [...show].forEach((itemShow) => {
        itemShow.classList.toggle("expanded", !isExpanded);
    });
    isExpanded = !isExpanded;
    more.textContent = isExpanded ? "See less" : "See more";
}
