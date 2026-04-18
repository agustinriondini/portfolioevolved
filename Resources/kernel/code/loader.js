let loaderStartTime = 0;

function showLoader() {
    document.body.classList.add('loading');
    loaderStartTime = performance.now();
}

function hideLoader() {
    const elapsed = performance.now() - loaderStartTime;
    const minDisplay = 2000; // 2 seconds min
    const remaining = Math.max(minDisplay - elapsed, 0);
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, remaining);
}

// Initial page load (backward compatible)
document.body.classList.add('loading');

window.addEventListener("load", function() {
    setTimeout(hideLoader, 3000); // Keep original 3s for initial
});

// Exports for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showLoader, hideLoader };
}
if (typeof window !== 'undefined') {
    window.showLoader = showLoader;
    window.hideLoader = hideLoader;
}
