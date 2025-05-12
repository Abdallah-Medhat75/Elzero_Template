let clickAnchor = document.querySelector("header .container ul li:nth-child(4)");
let megaMenu = document.querySelector(".mega-menu")

// Anchor Does Not Work Good With click event

clickAnchor.onclick = function () {
    megaMenu.classList.toggle("active");
}