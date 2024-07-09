const more_drop_btn = document.getElementById("main_nav_more");
const more_menu = document.getElementById("dropDown");
const less_menu = document.getElementById("cross_icon");

more_drop_btn.addEventListener("click", e => {
    more_menu.style.display = "flex";
});

less_menu.addEventListener("click", e => {
    more_menu.style.display = "none";
});