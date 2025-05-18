(function () {
    var isTVOn = false;

    var tvPowerButton = document.getElementById("tvPower");
    var tvRebootButton = document.getElementById("tvReboot");
    var tvHomeButton = document.getElementById("tvHome");

    if (!tvPowerButton || !tvRebootButton || !tvHomeButton) {
        // Si no existen aún, volver a intentar más tarde
        setTimeout(arguments.callee, 100);
        return;
    }

    tvPowerButton.addEventListener("click", powerTV);
    tvRebootButton.addEventListener("click", rebootTV);
    tvRebootButton.disabled = true;

    tvHomeButton.addEventListener("click", displayGHProf);
    tvHomeButton.disabled = true;

    function powerTV() {
        var tvDisplay = document.getElementById("tvDisplay");
        var ledNotif = document.getElementById("ledNotif");

        if (!isTVOn) {
            tvDisplay.innerHTML = '<video id="videoPlayer" src="./Resources/Videos/bootanimation.mp4" autoplay></video>';
            ledNotif.style.boxShadow = "0px 0px 10px green";
            tvDisplay.style.boxShadow = "0px  0px 10px var(--color-blanco)";
            isTVOn = true;

            setTimeout(function () {
                tvRebootButton.disabled = false;
                tvHomeButton.disabled = false;
            }, 27000);

            var videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.addEventListener('ended', function () {
                tvDisplay.style.backgroundImage = "url('./Resources/Images/Texturas/Cadillac.jpg')";
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

    function displayGHProf() {
        var tvDisplay = document.getElementById("tvDisplay");
        tvDisplay.style.backgroundImage = '';
        tvDisplay.innerHTML = '<iframe src="https://github.com/agustinriondini" width="100%" height="100%" frameborder="0"></iframe>';
    }

    function rebootTV() {
        var tvDisplay = document.getElementById("tvDisplay");
        tvDisplay.style.backgroundImage = '';
        tvDisplay.innerHTML = "<video autoplay width='100%' height='100%' src='./Resources/Videos/rebootLoader.mp4' type='video/mp4'></video>";

        setTimeout(function () {
            tvDisplay.innerHTML = '';
            var ledNotif = document.getElementById("ledNotif");
            ledNotif.style.boxShadow = "0px 0px 10px red";
            tvDisplay.style.boxShadow = '';
            isTVOn = false;

            setTimeout(function () {
                powerTV();
            }, 2000);

            tvRebootButton.disabled = true;
        }, 5000);
    }

    // Exponer funciones globales
    window.playGameOnTv = function (projectId) {
        var tvDisplay = document.getElementById("tvDisplay");
        var ledNotif = document.getElementById("ledNotif");

        var gameUrl = "https://agustinriondini.github.io/" + projectId + "/";

        if (!isTVOn) {
            alert("Para jugar, debe encender la TV primero");
            return;
        }

        tvDisplay.innerHTML = '<iframe src="' + gameUrl + '" width="100%" height="100%" frameborder="0"></iframe>';
        ledNotif.style.boxShadow = "0px 0px 10px green";
        tvDisplay.style.boxShadow = "0px  0px 10px var(--color-blanco)";
    };

    window.playdemovid = function () {
        var tvDisplay = document.getElementById("tvDisplay");
        var ledNotif = document.getElementById("ledNotif");
        alert("Proyecto en fase de desarrollo, verás un video demo de algunas características");
        tvDisplay.innerHTML = '<video id="videoPlayer" src="./Resources/Videos/video_demo_penguinSAS.mp4" autoplay></video>';
        ledNotif.style.boxShadow = "0px 0px 10px green";
        tvDisplay.style.boxShadow = "0px  0px 10px var(--color-blanco)";
    };
})();
