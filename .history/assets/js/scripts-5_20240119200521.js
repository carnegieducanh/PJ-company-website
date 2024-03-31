const toggleIcon = document.querySelector(".toggle__menu");
const menuDrawer = document.querySelector(".toggle__menu--drawer");

toggleIcon.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
    menuDrawer.classList.toggle("is-show");
}
