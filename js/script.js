const nav_links = document.querySelectorAll(".page-link");

nav_links.forEach(link => link.addEventListener('click', (e) => {
    nav_links.forEach(link => link.classList.remove("selected"));
    e.target.classList.add("selected");
}))

const nav_toggle = document.querySelector("#nav-toggle");
const nav_bar = document.querySelector("nav");

nav_toggle.addEventListener("click", (e) => {
    nav_bar.classList.toggle("hidden");
})