// Header được load bất đồng bộ (xem load() trong core.js), nên các phần tử
// bên dưới chưa tồn tại khi file này chạy. Dùng event delegation trên document
// để sự kiện vẫn hoạt động sau khi header được chèn (hoặc chèn lại) vào trang.

document.addEventListener("click", (e) => {
    // Tạo chức năng toogle cho memu mobile
    const dropShow = e.target.closest(".click-on-mobile");
    if (dropShow) {
        const dropItem = dropShow.firstElementChild;
        dropItem?.nextElementSibling?.classList.toggle("hidden");
    }

    // Chức năng toggle menu ngôn ngữ
    const lang = e.target.closest(".on-mobile-lang");
    if (lang) {
        lang.querySelector(".on-mobile")?.classList.toggle("hidden");
    }

    // Chức năng Click icon menu
    if (e.target.closest(".toggle__icon")) {
        document
            .querySelector(".toggle__menu--drawer")
            ?.classList.toggle("is-show");
    }
});
