function animateCounter(id, start, end, duration) {
    let element = document.getElementById(id);
    let range = end - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = Math.min((timestamp - startTime) / duration, 1);
        element.innerText = Math.floor(progress * range + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// Panggil fungsi ini untuk memulai animasi
animateCounter("pelajar-aktif", 0, 100, 2000);
animateCounter("jurusan", 0, 10, 2000);
animateCounter("guru", 0, 14, 2000);
animateCounter("tahun-ajar", 0, 2024, 3000);
