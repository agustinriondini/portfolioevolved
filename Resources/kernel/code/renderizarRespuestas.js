/**
 * renderizarRespuestas.js - Reusable Popup Helper
 * Popups: errorPopup, exitoPopup, definirPopup + Global Screen Check
 */

let scrollPosition = 0;
let screenCheckActive = false;

// CSS Styles (inline for modals - responsive, modern, backdrop blur)
const modalStyles = `
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  .popup-overlay.active {
    opacity: 1;
    visibility: visible;
  }
  .popup-modal {
    background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
    border: 1px solid #444;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    max-width: 90%;
    max-height: 80%;
    width: 400px;
    padding: 24px;
    color: white;
    position: relative;
    transform: scale(0.8) translateY(20px);
    transition: all 0.3s ease;
  }
  .popup-overlay.active .popup-modal {
    transform: scale(1) translateY(0);
  }
  .popup-title {
    margin: 0 0 16px 0;
    font-size: 1.4em;
    font-weight: bold;
  }
  .popup-error .popup-title { color: #ff6b6b; }
  .popup-success .popup-title { color: #51cf66; }
  .popup-message {
    margin-bottom: 20px;
    line-height: 1.5;
    font-size: 1.1em;
  }
  .popup-detail {
    background: rgba(255,255,255,0.1);
    padding: 12px;
    border-radius: 8px;
    font-size: 0.95em;
    border-left: 4px solid;
    margin-bottom: 20px;
  }
  .popup-error .popup-detail { border-color: #ff6b6b; }
  .popup-success .popup-detail { border-color: #51cf66; }
  .popup-buttons {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
  }
  .popup-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;
    min-width: 80px;
  }
  .popup-btn:hover { transform: translateY(-1px); }
  .popup-error .popup-btn { 
    background: #ff6b6b; 
    color: white; 
  }
  .popup-error .popup-btn:hover { background: #ff5252; }
  .popup-success .popup-btn { 
    background: #51cf66; 
    color: white; 
  }
  .popup-success .popup-btn:hover { background: #40c057; }
  .popup-cancel-btn {
    background: #666;
    color: white;
  }
  .popup-cancel-btn:hover { background: #555; }
  .popup-close {
    position: absolute;
    top: 12px;
    right: 16px;
    background: none;
    border: none;
    color: #aaa;
    font-size: 24px;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s;
  }
  .popup-close:hover { background: rgba(255,255,255,0.1); color: white; }
  @media (max-width: 480px) {
    .popup-modal { 
      width: 95%; 
      padding: 20px; 
      margin: 20px; 
    }
    .popup-buttons { flex-direction: column; }
  }
`;

// Inject global styles once
const styleId = 'popup-styles';
if (!document.getElementById(styleId)) {
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = modalStyles;
  document.head.appendChild(style);
}

function lockScroll() {
  scrollPosition = window.pageYOffset;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}

function unlockScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
}

function createPopup(type = 'info', title, message, detail = '', confirmText = 'Aceptar', cancelText = 'Cancelar') {
  // Remove existing popups
  document.querySelectorAll('.popup-overlay').forEach(el => el.remove());

  const overlay = document.createElement('div');
  overlay.className = `popup-overlay ${type}`;
  
  overlay.innerHTML = `
    <div class="popup-modal">
      <button class="popup-close" onclick="this.closest('.popup-overlay').remove(); unlockScroll();">&times;</button>
      <div class="popup-title">${title}</div>
      <div class="popup-message">${message}</div>
      ${detail ? `<div class="popup-detail">${detail}</div>` : ''}
      <div class="popup-buttons">
        ${cancelText ? `<button class="popup-btn popup-cancel-btn" onclick="this.closest('.popup-overlay').remove(); unlockScroll();">${cancelText}</button>` : ''}
        <button class="popup-btn" onclick="this.closest('.popup-overlay').remove(); unlockScroll();">${confirmText}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  lockScroll();
  
  requestAnimationFrame(() => overlay.classList.add('active'));

  // ESC key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      overlay.remove();
      unlockScroll();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

// Public API
window.errorPopup = (message, detail = '') => {
  createPopup('error', 'Error', message, detail);
  
  // ONLY auto-redirect for screen size errors (not landscape warning or others)
  if (detail.includes('400px') || detail.includes('500px')) {
    setTimeout(() => {
      window.location.hash = 'profile';
    }, 3000);
  }
};

window.exitoPopup = (message, detail = '') => {
  createPopup('success', 'Éxito', message, detail);
};

window.definirPopup = (title, content, confirmText = 'Aceptar', cancelText = 'Cancelar') => {
  createPopup('info', title, content, '', confirmText, cancelText);
};

// Screen Size Check (min 400x500px)
window.checkMinScreen = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (width < 400 || height < 500) {
    errorPopup(
      'Tu dispositivo no cumple con los requisitos mínimos para acceder.',
      `Ancho: ${width}px (<400px) | Alto: ${height}px (<500px)<br>Especialmente en el área de proyectos.`
    );
    return false;
  }
  return true;
};

window.initScreenCheck = () => {
  if (screenCheckActive) return;
  screenCheckActive = true;
  
  // Initial check
  checkMinScreen();
  
  // Resize listener (debounced)
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkMinScreen, 250);
  });
  
  // Section loaded check
  document.addEventListener('sectionLoaded', checkMinScreen);
};

// Auto-init if DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScreenCheck);
} else {
  initScreenCheck();
}

// Export for modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { errorPopup, exitoPopup, definirPopup, checkMinScreen, initScreenCheck };
}

