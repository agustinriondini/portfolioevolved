// TV Controls - Defines global functions for TV buttons onclick handlers
// Called from dynamic HTML in proyectos.js

let isMaximized = false;

// Query elements on demand to avoid duplication with tvEnhancer.js

window.powerTV = function() {
  const tvDisplay = document.getElementById('tvDisplay');
  const ledNotif = document.getElementById('ledNotif');
  const tvButtons = document.getElementById('tvButtons');
  if (typeof isTVOn === 'undefined') isTVOn = false;
  isTVOn = !isTVOn;
  if (isTVOn) {
    tvDisplay.classList.add('tv-on');
    ledNotif.style.borderColor = '#00ff00';
    ledNotif.style.boxShadow = '0px 0px 10px #00ff00';
    ledNotif.style.backgroundColor = '#00ff00';
    tvButtons.style.display = 'flex';
  } else {
    tvDisplay.classList.remove('tv-on');
    ledNotif.style.borderColor = '#ff3333';
    ledNotif.style.boxShadow = '0px 0px 10px #ff3333';
    ledNotif.style.backgroundColor = '#ff3333';
    tvButtons.style.display = 'none';
  }
};

window.rebootTV = function() {
  const tvDisplay = document.getElementById('tvDisplay');
  const ledNotif = document.getElementById('ledNotif');
  const tvButtons = document.getElementById('tvButtons');
  tvDisplay.innerHTML = '';
  tvDisplay.classList.remove('tv-on');
  ledNotif.style.borderColor = '#ff3333';
  ledNotif.style.boxShadow = '0px 0px 10px #ff3333';
  ledNotif.style.backgroundColor = '#ff3333';
  tvButtons.style.display = 'none';
  if (typeof isTVOn !== 'undefined') isTVOn = false;
};

window.maxTv = function() {
  const tvDisplay = document.getElementById('tvDisplay');
  if (typeof isMaximized === 'undefined') isMaximized = false;
  isMaximized = !isMaximized;
  if (isMaximized) {
    tvDisplay.style.width = '95vw';
    tvDisplay.style.maxWidth = 'none';
    tvDisplay.style.height = 'auto';
    tvDisplay.style.aspectRatio = '16/9';
  } else {
    tvDisplay.style.width = '';
    tvDisplay.style.maxWidth = '';
    tvDisplay.style.height = '';
    tvDisplay.style.aspectRatio = '';
  }
};

window.displayGHProf = function() {
  if (!isTVOn) return powerTV();
  tvDisplay.innerHTML = `
    <iframe src="https://github.com/agustinriondini" 
            style="width:100%; height:100%; border:none; border-radius:8px;"
            title="GitHub Profile"></iframe>
  `;
};

// No global init to avoid conflicts; DOMContentLoaded handled by loader
