/*commandcenter*/
document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector(".logoContainer");
    var nav = document.querySelector(".navContainer");
    var links = document.querySelectorAll(".navContainer, nav, ul, li, a");
    setTimeout(function() {
        logo.classList.add("aparecer");
    }, 100);
    setTimeout(function() {
        nav.classList.add("aparecer");
    }, 300);
    links.forEach(function(link, index) {
        setTimeout(function() {
        link.classList.add("aparecer");
      }, 500 + index * 100);
    });
});
/*profile*/
document.addEventListener("DOMContentLoaded", function() {
    var profile = document.getElementById("profile");
    profile.classList.add("loaded");
});