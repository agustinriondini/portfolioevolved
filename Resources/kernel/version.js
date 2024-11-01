$(document).ready(function() {
    var actualver = $('#updateVer').text();
    var lastUpdate = "public_release_v1.2.1_update_31102024_build#16";

    console.log('Valor actual:', actualver);

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
        console.log('Valor actualizado a:', lastUpdate);
    }
});

