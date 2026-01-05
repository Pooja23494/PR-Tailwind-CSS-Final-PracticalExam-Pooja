// Mobile menu
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const navlinks = document.getElementById("mobile-navlinks");

const openMenuHandler = () => {
    navlinks.classList.remove("-translate-x-full")
    navlinks.classList.add("translate-x-0")
}

const closeMenuHandler = () => {
    navlinks.classList.remove("translate-x-0")
    navlinks.classList.add("-translate-x-full")
}

mobileMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);