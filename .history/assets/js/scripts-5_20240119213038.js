const toggleIcon = document.querySelector(".toggle__icon");
const menuDrawer = document.querySelector(".toggle__menu--drawer");

toggleIcon.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
    menuDrawer.classList.contains("is-show")
        ? menuDrawer.classList.remove("is-show")
        : menuDrawer.classList.add("is-show");
}

const lang = document.querySelector(".on-mobile-lang");
lang.addEventListener("click", handleClick);
function handleClick(e) {
    // let langItem = lang.getElementsByClassName("on-mobile");
    let langItem = e.target.getElementsByClassName("on-mobile");
    console.log(langItem);
    // if (langItem) {
    // langItem.classList.toggle("hidden");
    // }
    langItem.classList.contains("hidden")
        ? langItem.classList.remove("hidden")
        : langItem.classList.add("hidden");
}
