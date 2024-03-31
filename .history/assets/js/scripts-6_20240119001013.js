const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");

let isShow = false;
[...clickDrop].forEach(
    (dropShow) =>
        (dropShow.onclick = () => {
            let dropItem = dropShow.closest(".click-on-mobile");
            if (dropItem) {
                let dropItem = clickDrop.firstElementChild;
                // dropItem.nextElementSibling.classList.toggle(
                //     "hidden",
                //     !isShow
                // );
                // isShow = !isShow;
            }
            console.log(dropItemm);
        })
);
// clickDrop.forEach(function (element) {
//     element.addEventListener("click", function () {
//         let dropdownMenu = element.nextElementSibling;
//         dropdownMenu.classList.toggle("hidden");
//     });
// });
