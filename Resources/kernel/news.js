var loadAlertShown = false;
window.addEventListener("load", function() {
    if (!loadAlertShown) {
        alert("Para una experiencia más completa, utilice su dispositivo móvil en modo landscape");
        loadAlertShown = true; 
    }
});
function showAlert(event) {
    event.preventDefault();
    alert("Ups! no sos vos, soy yo... Error#404 Parece que el recurso no esta disponible por el momento.");
}

function showUnavailableAlert(event) {
    event.preventDefault();
    alert("Ups! no sos vos, soy yo... Error#01. Funcion en desarrollo");
}

document.addEventListener("DOMContentLoaded", function() {
    var alertLinks = document.querySelectorAll('a[href="#"]');
    alertLinks.forEach(function(link) {
        link.addEventListener("click", showAlert);
    });

    var unavailableLinks = document.querySelectorAll('.unavailable');
    unavailableLinks.forEach(function(link) {
        link.addEventListener("click", showUnavailableAlert);
    });
});
