const btnMenu = document.getElementById("burger-menu-item");
const btnMenuCross = document.getElementById("burger-menu-item-cross")
const menu = document.getElementById("menu");
const navBar = document.getElementById("nav-bar");

btnMenu.addEventListener('click', function() {
    menu.style.display = "block";
    btnMenu.style.display = "none";
    btnMenuCross.style.display = "block";
    navBar.style.backgroundColor = "#000";

});

btnMenuCross.addEventListener('click', function() {
    menu.style.display = "none";
    btnMenu.style.display = "block";
    btnMenuCross.style.display = "none";
    navBar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
})