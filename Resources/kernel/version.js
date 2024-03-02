$(document).ready(function() {
    console.log('Script cargado correctamente.');

    var actualver = $('#updateVer').text();
    var lastUpdate = "public_release_v1.0.7_update_01032024_build#7";

    console.log('Valor actual:', actualver);

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
        console.log('Valor actualizado a:', lastUpdate);
    }
});

