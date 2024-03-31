const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");

let isShow = false;
[...clickDrop].forEach(
    (dropShow) =>
        (dropShow.onclick = () => {
            let clickDrop = dropShow.closest(".click-on-mobile");
            if (clickDrop) {
                let dropdownMenu =
                    clickDrop.nextElementSibling.nextElementSibling;
                dropdownMenu.classList.toggle("hidden");
                // isShow = !isShow;
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
