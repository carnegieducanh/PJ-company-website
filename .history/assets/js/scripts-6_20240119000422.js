const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");

let isShow = false;
[...clickDrop].forEach(
    (dropShow) =>
        (dropShow.onclick = () => {
            let dropItem = dropShow.closest(".click-on-mobile");
            if (dropItem) {
                let dropItemm = clickDrop.nextElementSibling;
                // dropItemm.classList.toggle("hidden");
                dropItem.nextElementSibling.classList.toggle("hidden", !isShow);
                isShow = !isShow;
            }
            // console.log(clickDrop);
        })
);
// clickDrop.forEach(function (element) {
//     element.addEventListener("click", function () {
//         let dropdownMenu = element.nextElementSibling;
//         dropdownMenu.classList.toggle("hidden");
//     });
// });
