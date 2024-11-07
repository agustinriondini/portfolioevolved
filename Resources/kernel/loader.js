document.body.classList.add('loading');

window.addEventListener("load", function() {
    setTimeout(function() {
        document.body.classList.remove('loading');
    }, 3000);
});
