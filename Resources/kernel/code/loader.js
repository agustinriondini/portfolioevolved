let loaderStartTime = 0;

function showLoader() {
    document.body.classList.add('loading');
    loaderStartTime = performance.now();
}

function hideLoader() {
    const elapsed = performance.now() - loaderStartTime;
    const minDisplay = 2000; 
    const remaining = Math.max(minDisplay - elapsed, 0);
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, remaining);
}

document.body.classList.add('loading');

window.addEventListener("load", function() {
    setTimeout(hideLoader, 3000); 
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { showLoader, hideLoader };
}
if (typeof window !== 'undefined') {
    window.showLoader = showLoader;
    window.hideLoader = hideLoader;
}
