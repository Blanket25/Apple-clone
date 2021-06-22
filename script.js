const btnMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

function openMenu () {
    menu.classList.toggle("unfolded-menu")
}

btnMenu.addEventListener('click', openMenu);