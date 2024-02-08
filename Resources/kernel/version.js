$(document).ready(function() {
    console.log('Script cargado correctamente.');

    var actualver = $('#updateVer').text();
    var lastUpdate = "public_release_v1.0.4_nightly_update_07022024_build#4";

    console.log('Valor actual:', actualver);

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
        console.log('Valor actualizado a:', lastUpdate);
    }
});

