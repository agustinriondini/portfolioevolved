function maxTv() {
var tvDisplay = document.getElementById("tvDisplay");

if (tvDisplay.requestFullscreen) {
tvDisplay.requestFullscreen();
} else if (tvDisplay.mozRequestFullScreen) { /* Firefox */
tvDisplay.mozRequestFullScreen();
} else if (tvDisplay.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
tvDisplay.webkitRequestFullscreen();
} else if (tvDisplay.msRequestFullscreen) { /* IE/Edge */
tvDisplay.msRequestFullscreen();
}
}
