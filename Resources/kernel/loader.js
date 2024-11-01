document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loading');

    setTimeout(function() {
        document.body.classList.remove('loading');
    }, 3000);
});