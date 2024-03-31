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
