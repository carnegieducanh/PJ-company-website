// ___
window.addEventListener("scroll", function () {
    let hideUp = document.querySelector(".banner-inner");
    hideUp.classList.toggle("hideUp", window.scrollY > 0);
});
