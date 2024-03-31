// JavaScript để thay đổi id khi click vào nút
function changeButtonId() {
    // Lấy ra phần tử nút có id là "more"
    var button = document.getElementById("more");

    // Kiểm tra xem phần tử có tồn tại không
    if (button) {
        // Thay đổi id của nút thành "less"
        button.id = "less";
    }
}
