function newalertver(){
        if (window.innerWidth < 700) {
                errorPopup("Para una experiencia más completa, utilice su dispositivo móvil en modo landscape");
        }
};

function showAlert(event) {
    event.preventDefault();
    errorPopup("Ups! no sos vos, soy yo... Error#404", "Parece que el recurso no esta disponible por el momento.");
}

function showUnavailableAlert(event) {
    event.preventDefault();
    errorPopup("Ups! no sos vos, soy yo... Error#01", "Funcion en desarrollo");
}

// Auto-bind links (runs after DOM ready via helper)
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
