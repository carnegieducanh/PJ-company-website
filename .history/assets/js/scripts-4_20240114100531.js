more.onclick = () => {
    show.classList.toggle("expanded");
};

function changeButtonText() {
    // Lấy ra phần tử nút có id là "more"
    var button = document.getElementById("more");

    // Kiểm tra xem phần tử có tồn tại không
    if (button) {
        // Thay đổi nội dung text của nút
        button.textContent = "See less";
    }
}
