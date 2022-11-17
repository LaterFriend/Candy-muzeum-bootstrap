const navBar = document.getElementById("mainNavbar");

document.addEventListener("scroll", () => {
    let position = this.scrollY;
    if (position > navBar.offsetHeight) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
});
