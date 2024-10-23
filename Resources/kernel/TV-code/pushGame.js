document.addEventListener("DOMContentLoaded", function() {
var isTVOn = false;

var tvPowerButton = document.getElementById("tvPower");
tvPowerButton.addEventListener("click", powerTV);

var tvRebootButton = document.getElementById("tvReboot");
tvRebootButton.addEventListener("click", rebootTV);
tvRebootButton.disabled = true;

function powerTV() {
var tvDisplay = document.getElementById("tvDisplay");
var ledNotif = document.getElementById("ledNotif");

if (!isTVOn) {
tvDisplay.innerHTML = '<video id="videoPlayer" src="../Videos/bootanimation.mp4" autoplay></video>';
ledNotif.style.boxShadow = "0px 0px 10px green";
tvDisplay.style.boxShadow = "0px  0px 10px var(--color-blanco)";
isTVOn = true;
setTimeout(function() {
tvRebootButton.disabled = false;
}, 27000);
var videoPlayer = document.getElementById('videoPlayer');
videoPlayer.addEventListener('ended', function() {
tvDisplay.style.backgroundImage = "url('../Images/Texturas/Cadillac.jpg')";
videoPlayer.remove();
});
} else {
tvDisplay.innerHTML = '';
ledNotif.style.boxShadow = "0px 0px 10px red";
tvDisplay.style.boxShadow = '';
tvDisplay.style.backgroundImage = '';
isTVOn = false;
}
}

function rebootTV() {
var tvDisplay = document.getElementById("tvDisplay");
tvDisplay.style.backgroundImage = '';
tvDisplay.innerHTML = "<video autoplay width='100%' height='100%' src='../Videos/rebootLoader.mp4' type='video/mp4'></video>";

setTimeout(function() {
tvDisplay.innerHTML = '';
var ledNotif = document.getElementById("ledNotif");
ledNotif.style.boxShadow = "0px 0px 10px red";
tvDisplay.style.boxShadow = '';
isTVOn = false;

setTimeout(function() {
powerTV();
}, 2000);
tvRebootButton.disabled = true;
}, 5000);
}

// Define la función para reproducir el juego en el televisor
window.playGameOnTv = function(projectId) {
    var tvDisplay = document.getElementById("tvDisplay");
    var ledNotif = document.getElementById("ledNotif");

    // Construye la URL del juego utilizando el projectId
    var gameUrl = "https://agustinriondini.github.io/" + projectId + "/";

    if (!isTVOn) {
        alert("Para jugar, debe encender la TV primero");
        return;
    }

    // Carga el juego en el televisor
    tvDisplay.innerHTML = '<iframe src="' + gameUrl + '" width="100%" height="100%" overflow-x="hidden" overflow-y="hidden" frameborder="0"></iframe>';
    ledNotif.style.boxShadow = "0px 0px 10px green";
    tvDisplay.style.boxShadow = "0px  0px 10px var(--color-blanco)";
};
});

