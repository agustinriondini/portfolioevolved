document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggleMenu").addEventListener("click", function() {
        var navContainer = document.getElementById("navContainer");
        navContainer.classList.toggle("active");
        this.classList.toggle("active");
        this.textContent = navContainer.classList.contains("active") ? "✕" : "|||";
    });
});
