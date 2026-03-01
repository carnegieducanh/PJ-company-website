/*
 * Image Slider - Tự Động Chạy & Các Nút Điều Hướng
 *
 * Khởi tạo sau khi template slideshow được load xong
 */

let carouselInitialized = false;

window.addEventListener("template-loaded", initCarousel);

function initCarousel() {
    if (carouselInitialized) return;

    const slider = document.querySelector(".swiper-slide .swiper-slide__list");
    if (!slider) return;

    carouselInitialized = true;

    const items = document.querySelectorAll(
        ".swiper-slide .swiper-slide__list .swiper-slide__list-item"
    );
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const dots = document.querySelectorAll(".swiper-slide .swiper-slide__dots li");

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

        const lastActiveDot = document.querySelector(
            ".swiper-slide .swiper-slide__dots li.active"
        );
        lastActiveDot.classList.remove("active");
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

    window.onresize = function () {
        reloadSlider();
    };
}
