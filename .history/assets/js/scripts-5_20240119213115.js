const toggleIcon = document.querySelector(".toggle__icon");
const menuDrawer = document.querySelector(".toggle__menu--drawer");

toggleIcon.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
    menuDrawer.classList.contains("is-show")
        ? menuDrawer.classList.remove("is-show")
        : menuDrawer.classList.add("is-show");
}
