function toggleMenu() {
    const menu = document.querySelector(".menu");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    } else {
        menu.style.display = "flex";
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    }
}

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const menu = document.querySelector(".menu");
        const openMenu = document.getElementById("open-menu");
        const closeMenu = document.getElementById("close-menu");

        menu.style.display = "none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    });
});
