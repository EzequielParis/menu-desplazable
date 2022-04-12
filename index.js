const Toggle = document.querySelector(".toggle")
const MenuHorizontal = document.querySelector(".menu-horizontal")

Toggle.addEventListener("click", () => {
    MenuHorizontal.classList.toggle("menu-horizontal_visible");
});