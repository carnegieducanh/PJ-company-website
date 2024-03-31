const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");

let isShow = false;
[...clickDrop].forEach(
    (dropShow) =>
        (dropShow.onclick = () => {
            let dropItem = dropShow.closest(".navbar-link");
            if (dropItem) {
                let item = dropItem.firstElementChild;
                // dropItem.nextElementSibling.classList.toggle(
                //     "hidden",
                //     !isShow
                // );
                // isShow = !isShow;
            }
            console.log(dropItem);
        })
);
// clickDrop.forEach(function (element) {
//     element.addEventListener("click", function () {
//         let dropdownMenu = element.nextElementSibling;
//         dropdownMenu.classList.toggle("hidden");
//     });
// });
