$(document).ready(function() {
    //tipo de release
    var release = $('#release').text();
    //version de portfolio
    var actualver = $('#updateVer').text();
    //fecha de publicacion
    var lastUpdate =$('#release_date').text();
    //build N°
    var buildnumber = $('#build').text();
    
    //set nuevos valores
    var release = "public_release_";
    var actualver = "v1.3.1_";
    var lastUpdate = "update_25032026_";
    var buildnumber = "build#21";

    if (actualver !== lastUpdate) {
        $('#release').text(release);
        $('#updateVer').text(actualver);
        $('#release_date').text(lastUpdate);
        $('#build').text(buildnumber);
    }
});
