
document.addEventListener("DOMContentLoaded", function () {
    console.log("页面加载完成！");

    // 图片放大预览
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightbox.classList.remove("hidden");
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.classList.add("hidden");
    });
});
