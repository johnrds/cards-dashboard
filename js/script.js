const nav_links = document.querySelectorAll(".page-link");

nav_links.forEach(link => link.addEventListener('click', (e) => {
    nav_links.forEach(link => link.classList.remove("selected"));
    e.target.classList.add("selected");
}))

const nav_toggle = document.querySelector("#nav-toggle");
const nav_bar = document.querySelector("nav");
const container = document.querySelector(".container");

// let hide = false;

nav_toggle.addEventListener("click", (e) => {

    nav_bar.classList.toggle("hidden");
    container.classList.toggle("hidden");
    // if (hide) {
    //     nav_bar.style.transform = "translateX(0px)"
    //     container.style.gridTemplateColumns = "minmax(230px, 1fr) 4fr"
    // } else {
    //     nav_bar.style.transform = "translateX(-500px)";
    //     container.style.gridTemplateColumns = "0px 4fr"
    // }

    // hide = !hide;
})