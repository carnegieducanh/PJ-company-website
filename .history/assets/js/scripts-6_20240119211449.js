// Tạo chức năng toogle cho memu mobile

const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");
const lang = document.querySelector(".on-mobile");

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

lang.addEventListener("click", handleClick);
function handleClick() {
    // let langItem = lang.getElementsByClassName("on-mobile");

    lang.classList.contains("hidden")
        ? lang.classList.remove("hidden")
        : lang.classList.add("hidden");
}
