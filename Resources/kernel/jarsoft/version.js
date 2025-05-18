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
    var actualver = "v1.2.4_";
    var lastUpdate = "update_18052025_";
    var buildnumber = "build#20";

    if (actualver !== lastUpdate) {
        $('#release').text(release);
        $('#updateVer').text(actualver);
        $('#release_date').text(lastUpdate);
        $('#build').text(buildnumber);
    }
});
