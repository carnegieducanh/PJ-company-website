/*
 * Smooth scroll bằng Lenis (assets/vendor/lenis — v1.3.26)
 *
 * - Lăn chuột / touchpad: trang trượt mượt rồi chậm dần
 * - Thiết bị cảm ứng: giữ cuộn gốc của hệ điều hành (syncTouch mặc định false)
 * - Mỗi trang chỉ tạo một instance, gán lên window.__lenis.
 *   Cần cuộn bằng code thì gọi window.__lenis.scrollTo(...),
 *   KHÔNG dùng window.scrollTo / scrollIntoView (Lenis sẽ bị lệch vị trí)
 * - KHÔNG thêm "scroll-behavior: smooth" vào CSS (hai lớp cuộn mượt chồng nhau gây giật)
 */

const LENIS_OPTIONS = {
    duration: 1.4, // mỗi lần cuộn trượt ~1.4s
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out: nhanh lúc đầu, hãm dần
    smoothWheel: true, // làm mượt chuột + touchpad
    wheelMultiplier: 0.9, // mỗi nấc chuột đi ngắn hơn mặc định một chút
    respectReducedMotion: false, // vẫn cuộn mượt khi OS bật "giảm chuyển động"
};

if (window.Lenis && !window.__lenis) {
    const lenis = new Lenis(LENIS_OPTIONS);

    const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    window.__lenis = lenis;
}
