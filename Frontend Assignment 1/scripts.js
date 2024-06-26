function toggleMenu() {
    var navbar = document.getElementById("sideNavbar");
    if (navbar.style.width === "250px") {
        navbar.style.width = "0";
    } else {
        navbar.style.width = "250px";
    }
}

function closeMenu() {
    document.getElementById("sideNavbar").style.width = "0";
}
