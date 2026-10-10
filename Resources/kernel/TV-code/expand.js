function maxTv() {
var tvDisplay = document.getElementById("tvDisplay");

if (tvDisplay.requestFullscreen) {
tvDisplay.requestFullscreen();
} else if (tvDisplay.mozRequestFullScreen) { 
tvDisplay.mozRequestFullScreen();
} else if (tvDisplay.webkitRequestFullscreen) { 
tvDisplay.webkitRequestFullscreen();
} else if (tvDisplay.msRequestFullscreen) { 
tvDisplay.msRequestFullscreen();
}
}
