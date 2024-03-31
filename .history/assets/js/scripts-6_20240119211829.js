// Tạo chức năng toogle cho memu mobile

const clickDrop = document.querySelectorAll(".click-on-mobile");
const menuShow = document.querySelectorAll(".show-on-mobile");
const lang = document.querySelector(".on-mobile-lang");

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
function handleClick(e) {
    let langItem = lang.getElementsByClassName("on-mobile");

    e.target.classList.contains("hidden")
        ? e.target.classList.remove("hidden")
        : e.target.classList.add("hidden");
}
