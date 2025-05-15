// Start Selecting Elements
let scrollToTopAnchor = document.querySelector(".scroll-to-top");
let clickAnchor = document.querySelector("header .container ul li:nth-child(4)");
let megaMenu = document.querySelector(".mega-menu")
let landingSection = document.querySelector(".landing");
// End Selecting Elements
clickAnchor.onclick = function () {
    megaMenu.classList.toggle("active");
}
landingSection.onclick = function () {
    megaMenu.classList.remove("active");
}
let statsP = document.querySelectorAll(".stats .container .box p:nth-child(2)");
let enable = true;
window.onscroll = function () {
    if (enable) {
        if (window.scrollY >= document.querySelector(".stats").offsetTop) {
            for (let i = 0; i < statsP.length; i++) {
                function countup(el) {
                    el.textContent++;
                    if (el.textContent === el.getAttribute("data-target")) {
                        clearInterval(counter);
                    }
                }
                let counter = setInterval(countup, 2100 / statsP[i].getAttribute("data-target"), statsP[i]);
            }
            enable = false;
        }
    }
    if (window.scrollY >= 600) {
        scrollToTopAnchor.style.cssText = "display: flex; visibility: visible; opacity: 1;";
    } else {
        scrollToTopAnchor.style.cssText = "display: flex; visibility: visible; opacity: 0; cursor: initial;"
    }
};
