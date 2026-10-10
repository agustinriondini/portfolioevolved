document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleMenu");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", function() {
        const navContainer = document.getElementById("navContainer");
        if (!navContainer) return;

        navContainer.classList.toggle("active");
        this.classList.toggle("active");

        if (navContainer.classList.contains("active")) {
            this.innerHTML = `
                <svg class="svg-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            `;
        } else {
            this.innerHTML = `
                <svg class="svg-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            `;
        }
    });
});
