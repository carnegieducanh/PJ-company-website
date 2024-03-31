// Tạo chức năng toogle cho memu mobile

const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");

[...clickDrop].forEach(
    (dropShow) =>
        (dropShow.onclick = () => {
            let dropItem = dropShow.getElementsByClassName("navbar-link");
            if (dropItem) {
                let dropItem = dropShow.firstElementChild;
                dropItem.nextElementSibling.classList.toggle("hidden");
            }
        })
);

const lang = document.querySelector("navbar__menu-lang");
lang.addEventListener("click", handleClick);
function handleClick() {
    let langItem = lang.getElementsByClassName("navbar__menu-item");
    if (langItem) {
        langItem.classList.toggle("hidden");
    }
}
