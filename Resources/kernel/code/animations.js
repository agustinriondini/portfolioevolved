/*commandcenter*/
document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector(".menuButtonContainer");
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

function loadScriptsSequentially(scripts) {
    return scripts.reduce((promise, src) => {
        return promise.then(() => new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `${src}?t=${Date.now()}`; // Cache buster
            script.setAttribute('data-dynamic-script', 'true');
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Error cargando script: ${src}`));
            document.body.appendChild(script);
        }));
    }, Promise.resolve());
}
