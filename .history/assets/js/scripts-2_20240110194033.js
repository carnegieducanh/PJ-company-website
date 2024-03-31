/*
 * Image Slider - Tự Động Chạy & Các Nút Điều Hướng
 */

let slider = document.querySelector(".swiper-slide .swiper-slide__list");
let items = document.querySelectorAll(
    ".swiper-slide .swiper-slide__list .swiper-slide__list-item"
);
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".swiper-slide .swiper-slide__dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + "px";
    //
    let last_active_dot = document.querySelector(
        ".swiper-slide .swiper-slide__dots li.active"
    );
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener("click", () => {
        active = key;
        reloadSlider();
    });
});
window.onresize = function (event) {
    reloadSlider();
};

// hide up
window.addEventListener("scroll", function () {
    const hideUp = document.querySelector("body");
    body.classList.toggle("hideup", window.scroll > 0);
});
