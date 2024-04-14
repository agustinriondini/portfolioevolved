$(document).ready(function() {
    var actualver = $('#updateVer').text();
    var lastUpdate = "public_release_v1.1.1_update_14042024_build#12";

    console.log('Valor actual:', actualver);

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
        console.log('Valor actualizado a:', lastUpdate);
    }
});

