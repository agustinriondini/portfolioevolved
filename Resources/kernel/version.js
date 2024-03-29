$(document).ready(function() {
    var actualver = $('#updateVer').text();
    var lastUpdate = "public_release_v1.1.0_update_29032024_build#10";

    console.log('Valor actual:', actualver);

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
        console.log('Valor actualizado a:', lastUpdate);
    }
});

