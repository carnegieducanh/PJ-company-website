// hide-show content
// let isExpanded = false;
// more.onclick = () => {
//     show.classList.toggle("expanded", !isExpanded);
//     // Đảo ngược trạng thái mở rộng
//     isExpanded = !isExpanded;
//     more.textContent = isExpanded ? "See less" : "See more";
// };

// hide-show content
const more = document.querySelectorAll(".btn");
const show = document.querySelectorAll(".hide-show");
let isExpanded = false;
[...more].forEach(
    (moreBtn) =>
        // moreBtn.addEventListener("click", handleClickBtn)
        (moreBtn.onclick = () => {
            let show = moreBtn.closest(".hide-show");
            if (show) {
                show.classList.toggle("expanded", !isExpanded);
                isExpanded = !isExpanded;
                moreBtn.textContent = isExpanded ? "See less" : "See more";
            }
        })
);
// function handleClickBtn(e) {
//     // [...show].forEach((itemShow) => {
//     const parentDiv = e.target.closest(".hide-show");

//     parentDiv.classList.toggle("expanded", !isExpanded);
//     // e.target.classList.toggle("expanded", !isExpanded);
//     isExpanded = !isExpanded;
//     e.target.textContent = isExpanded ? "See less" : "See more";
// }
