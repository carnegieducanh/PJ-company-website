// Tạo chức năng toogle cho memu mobile

const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");
const lang = document.querySelector(".on-mobile-lang");
const langItem = document.querySelector(".on-mobile");

[...clickDrop].forEach(
    (dropShow) =>
        (dropShow.onclick = (e) => {
            let dropItem = dropShow.getElementsByClassName("navbar-link");
            if (dropItem) {
                debuggerropItem = dropShow.firstElementChild;
                dropItem.firstElementChild.nextElementSibling.classList.toggle(
                    "hidden"
                );
            }
        })
);

lang.addEventListener("click", handleClick);
function handleClick(e) {
    e.target = langItem.classList.contains("hidden");
    // ? langItem.classList.remove("hidden")
    // : langItem.classList.add("hidden");
    langItem.classList.toggle("hidden");
}

// Chức năng Click icon menu
const toggleIcon = document.querySelector(".toggle__icon");
const menuDrawer = document.querySelector(".toggle__menu--drawer");

toggleIcon.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
    menuDrawer.classList.contains("is-show")
        ? menuDrawer.classList.remove("is-show")
        : menuDrawer.classList.add("is-show");
}
