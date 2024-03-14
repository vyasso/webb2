let video = document.querySelector('video');
window.addEventListener('scroll', function () {
    let value = 1 + window.scrollY / -600;
    video.style.opacity = value;

})

//scroll
let progress = document.getElementById('progressbar'
);
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}