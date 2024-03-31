const toggleIcon = document.querySelector(".toggle__menu");
const menuDrawer = document.querySelector(".toggle__menu--drawer");

toggleIcon.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
    // if (menuDrawer.classList.contains("is-show")) {
    //     menuDrawer.classList.remove("is-show");
    // } else {
    //     menuDrawer.classList.add("is-show");
    // }

    menuDrawer.classList.contains("is-show")
        ? menuDrawer.classList.remove("is-show")
        : menuDrawer.classList.add("is-show");
}
