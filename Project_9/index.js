const toggle = document.querySelector(".toggle button")
const nav = document.querySelector("nav")
const links = document.querySelector(".links")


toggle.addEventListener("click", () => {
    nav.classList.toggle("toggled")
    links.classList.toggle("dropdown")
})