// JavaScript for changing navbar style on scroll
window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = "#004d40";
    } else {
        navbar.style.backgroundColor = "#009688";
    }
};
