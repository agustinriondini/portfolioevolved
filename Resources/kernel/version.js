$(document).ready(function() {
    var actualver = $('#updateVer').text();
    var lastUpdate = "public_release_v1.2.3_update_20022025_build#19";

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
    }
});

