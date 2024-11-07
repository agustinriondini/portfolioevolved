$(document).ready(function() {
    var actualver = $('#updateVer').text();
    var lastUpdate = "public_release_v1.2.2_update_06112024_build#17";

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
    }
});

