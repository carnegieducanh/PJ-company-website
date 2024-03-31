// hide-show content: Dùng id
// let isExpanded = false;
// more.onclick = () => {
//     show.classList.toggle("expanded", !isExpanded);
//     // Đảo ngược trạng thái mở rộng
//     isExpanded = !isExpanded;
//     more.textContent = isExpanded ? "See less" : "See more";
// };

// hide-show content: Dùng class
const more = document.querySelectorAll(".btn");
const shows = document.querySelectorAll(".hide-show");
let isExpanded = false;
[...more].forEach(
    (moreBtn) =>
        (moreBtn.onclick = () => {
            let show = moreBtn.closest(".hide-show");
            if (show) {
                show.classList.toggle("expanded", !isExpanded);
                isExpanded = !isExpanded;
                moreBtn.textContent = isExpanded ? "See less" : "See more";
            }
        })
);
