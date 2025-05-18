document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggleMenu").addEventListener("click", function() {
        var navContainer = document.getElementById("navContainer");
        if (navContainer.style.display === "none" || navContainer.style.display === "") {
            navContainer.style.display = "flex";
            this.textContent = "✕";
        } else {
            navContainer.style.display = "none";
            this.textContent = "|||";
        }
    });
});
