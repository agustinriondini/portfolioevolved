
(function () {
  'use strict';

  let isTVOn = false;
  let isBooting = false;
  let isMaximized = false;
  let currentApp = null;
  let clockInterval = null;
  let pointerAnimationFrame = null;
  let mousePos = { x: 0, y: 0 };
  let isHoveringInteractive = false;
  let isMouseDown = false;

  const TV_PROJECTS = {
    ahorcado: {
      id: 'ahorcado',
      title: 'Ahorcado Game',
      category: 'Juego Web • Canvas',
      tags: 'JavaScript • HTML5 Canvas',
      desc: 'Clásico juego del ahorcado interactivo con interfaz retro y animaciones fluidas.',
      type: 'game',
      url: 'https://agustinriondini.github.io/Ahorcado/',
      code: 'https://github.com/agustinriondini/Ahorcado',
      thumb: './Resources/Images/Preview/ahorcadoV2.0.png',
      backdrop: './Resources/Images/Preview/ahorcadoV2.0.png',
      badge: 'JUEGO DESTACADO',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4m-2-2v4m7-2h.01m3 0h.01"></path></svg>'
    },
    encryptor: {
      id: 'encryptor',
      title: 'JAR Encryptor',
      category: 'Herramienta • Criptografía',
      tags: 'JavaScript • Algoritmos',
      desc: 'Cifrador y descifrador de texto con validación y animaciones de consola cyberpunk.',
      type: 'game',
      url: 'https://agustinriondini.github.io/J.A.R-Encryptor/',
      code: 'https://github.com/agustinriondini/J.A.R-Encryptor',
      thumb: './Resources/Images/Preview/encriptadorv2.png',
      backdrop: './Resources/Images/Preview/encriptadorv2.png',
      badge: 'HERRAMIENTA',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>'
    },
    qlosucio: {
      id: 'qlosucio',
      title: 'QLosucio Arcade',
      category: 'Minijuego • Arcade',
      tags: 'JavaScript • HTML5 Canvas',
      desc: 'Juego arcade retro interactivo con física de partículas y sistema de puntuación.',
      type: 'game',
      url: 'https://agustinriondini.github.io/qlosucio/',
      code: 'https://github.com/agustinriondini/qlosucio',
      thumb: './Resources/Images/Icons/cd.jpg',
      backdrop: './Resources/Images/Preview/protfolioevolved.png',
      badge: 'ARCADE',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
    },

    penguin: {
      id: 'penguin',
      title: 'Penguin Platform',
      category: 'Core • Identity & Workspace',
      tags: 'Node.js 24 • Express 5 • Vite • Monorepo',
      desc: 'Plataforma fundacional y modular de Jarsoft que orquesta identidades (IdP/SSO con MFA), espacios de trabajo multi-tenant, matriz de autorización dinámica, frontend modular shell y workers en segundo plano.',
      type: 'gallery',
      images: [
        './Resources/Images/Preview/penguin_dashboard.png',
        './Resources/Images/Preview/penguin_identity.png',
        './Resources/Images/Preview/penguin_helpcenter.png'
      ],
      captions: [
        'Dashboard Central & Monitoreo del Servidor',
        'Gestión de Identidad, Perfil y Seguridad MFA',
        'Centro de Conocimiento y Módulos de Negocio'
      ],
      thumb: './Resources/Images/Preview/penguin_dashboard.png',
      backdrop: './Resources/Images/Preview/penguin_dashboard.png',
      badge: 'CONFIDENCIAL • CORE',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>'
    },
    project_dwa: {
      id: 'project_dwa',
      title: 'Project-DWA',
      category: 'Videojuego 3D • Unity 6',
      tags: 'Unity 6 • C# • URP • ScriptableObjects',
      desc: 'Videojuego 3D de mundo abierto en Unity 6 (URP) con arquitectura modular por Assembly Definitions, diseño Data-Driven con ScriptableObjects y herramientas de Editor personalizadas.',
      type: 'gallery',
      images: [
        './Resources/Images/Preview/dwa_world.png',
        './Resources/Images/Preview/dwa_front.png'
      ],
      captions: [
        'Exploración en Mundo Abierto 3D (URP) & HUD Dinámico',
        'Personaje Triceratops, Sistema de Progresión y Arquetipos'
      ],
      thumb: './Resources/Images/Preview/dwa_front.png',
      backdrop: './Resources/Images/Preview/dwa_world.png',
      badge: 'CONFIDENCIAL • UNITY 3D',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>'
    },
    project_petservices: {
      id: 'project_petservices',
      title: 'Project-PetServices',
      category: 'Ecosistema Mobile • Backend',
      tags: 'Android • Kotlin • Compose • Node.js',
      desc: 'Plataforma integral de dos aplicaciones móviles nativas y backend centralizado con geolocalización, live tracking en segundo plano vía WebSockets y validación QR.',
      type: 'game',
      url: '#',
      thumb: './Resources/Images/Icons/cd.jpg',
      backdrop: './Resources/Images/Preview/gestoria.png',
      badge: 'CONFIDENCIAL • MOBILE',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="19" x2="4" y2="15"></line><line x1="20" y1="19" x2="20" y2="15"></line><rect x="6" y="9" width="12" height="11" rx="2"></rect><path d="M7 6a5 5 0 0 1 10 0"></path></svg>'
    },
    cocovainilla: {
      id: 'cocovainilla',
      title: 'Cocovainilla',
      category: 'E-Commerce • Web',
      tags: 'HTML5 • CSS3 • JavaScript',
      desc: 'Sitio e-commerce con catálogo interactivo, diseño responsive y UX optimizada.',
      type: 'web',
      url: 'https://www.cocovainilla.com.ar',
      code: 'https://github.com/agustinriondini',
      thumb: './Resources/Images/Preview/gestoria.png',
      backdrop: './Resources/Images/Desafios ONE/ChallengeONE-Ecommerce.png',
      badge: 'E-COMMERCE',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>'
    },
    sueldos: {
      id: 'sueldos',
      title: 'Calculadora Sueldos',
      category: 'App C++ • Desktop',
      tags: 'C++ • C# • Windows',
      desc: 'Aplicación de escritorio para liquidación y cálculo automatizado de salarios.',
      type: 'download',
      url: './Resources/Others/JAR-Soft_CDS_v0.1.2.exe',
      code: 'https://github.com/agustinriondini/Calculadora-de-sueldo-C-',
      thumb: './Resources/Images/Preview/calculadora-sueldo.png',
      backdrop: './Resources/Images/Preview/calculadora-sueldo.png',
      badge: 'APP ESCRITORIO',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01m-4 0h.01m-4 0h.01m8 4h.01m-4 0h.01m-4 0h.01m4 4h.01m-4 4h.01"></path></svg>'
    },
    downloads: {
      id: 'downloads',
      title: 'Descargas CV',
      category: 'Documentos • PDF',
      tags: 'Currículum Vitae • IT & Software',
      desc: 'Centro de descarga oficial de Currículum Vitae en PDF (Perfil IT y Perfil Software Developer).',
      type: 'system',
      url: '#',
      code: '#',
      thumb: './Resources/Images/Icons/mainIcon.png',
      backdrop: './Resources/Images/Preview/protfolioevolved.png',
      badge: 'DESCARGAS',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
    },
    profile: {
      id: 'profile',
      title: 'Sobre Mí',
      category: 'Sistema • Biografía',
      tags: 'Desarrollador • UTN • Perfil',
      desc: 'Información profesional de Juan Agustín Riondini, stack técnico y formación.',
      type: 'system',
      url: '#',
      code: 'https://github.com/agustinriondini',
      thumb: './Resources/Images/Meta/profile.jpg',
      backdrop: './Resources/Images/Meta/profile.jpg',
      badge: 'PERFIL DEV',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
    },
    settings: {
      id: 'settings',
      title: 'Ajustes TV',
      category: 'Sistema • Configuración',
      tags: 'Penguindroid OS • Reset',
      desc: 'Personalización de interfaz, iluminación ambiental y control del sistema.',
      type: 'system',
      url: '#',
      code: '#',
      thumb: './Resources/Images/Icons/mainIcon.png',
      backdrop: './Resources/Images/Icons/mainIcon.png',
      badge: 'SISTEMA',
      iconSvg: '<svg class="svg-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'
    }
  };

  const CAROUSEL_PROJECT_IDS = ['ahorcado', 'encryptor', 'project_dwa', 'project_petservices', 'cocovainilla', 'sueldos', 'penguin'];
  let currentCarouselIdx = 0;
  let carouselInterval = null;
  let isCarouselPaused = false;
  let featuredProjectId = 'ahorcado';

  function initAndroidTV() {
    const tvDisplay = document.getElementById('tvDisplay');
    if (!tvDisplay) {
      setTimeout(initAndroidTV, 50);
      return;
    }

    bindHardwareButtons();
    initVirtualPointer();
    initClock();
    renderTvHome();
    initSearchFeature();
    updateTvPowerState(); 
  }

  function initClock() {
    if (clockInterval) clearInterval(clockInterval);
    const updateTime = () => {
      const clockEl = document.getElementById('tvLiveClock');
      if (clockEl) {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        clockEl.textContent = `${hrs}:${mins}`;
      }
    };
    updateTime();
    clockInterval = setInterval(updateTime, 1000);
  }

  function bindHardwareButtons() {
    const btnPower = document.getElementById('tvPowerBtn');
    const btnHome = document.getElementById('tvHomeBtn');
    const btnRestart = document.getElementById('tvRestartBtn');
    const btnMax = document.getElementById('tvMaxBtn');

    if (btnPower) btnPower.onclick = () => window.powerTV();
    if (btnHome) btnHome.onclick = () => window.tvGoHome();
    if (btnRestart) btnRestart.onclick = () => window.rebootTV();
    if (btnMax) btnMax.onclick = () => window.maxTv();
  }

  function initVirtualPointer() {
    const tvDisplay = document.getElementById('tvDisplay');
    const pointer = document.getElementById('tvVirtualPointer');
    if (!tvDisplay || !pointer) return;

    tvDisplay.addEventListener('mouseenter', () => {
      if (isTVOn && !isBooting) {
        pointer.classList.add('active');
      }
    });

    tvDisplay.addEventListener('mouseleave', () => {
      pointer.classList.remove('active', 'isHovering', 'isClicking');
      isMouseDown = false;
    });

    tvDisplay.addEventListener('mousemove', (e) => {
      if (!isTVOn || isBooting) return;
      const rect = tvDisplay.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mousePos = { x, y };

      const elem = document.elementFromPoint(e.clientX, e.clientY);
      if (elem && elem.closest('button, a, input, .tvInteractive, .tvAppTile, .shelfActionBtn')) {
        isHoveringInteractive = true;
      } else {
        isHoveringInteractive = false;
      }

      if (!pointerAnimationFrame) {
        pointerAnimationFrame = requestAnimationFrame(renderPointer);
      }
    });

    tvDisplay.addEventListener('mousedown', () => {
      if (!isTVOn || isBooting) return;
      isMouseDown = true;
      pointer.classList.add('isClicking');
    });

    window.addEventListener('mouseup', () => {
      isMouseDown = false;
      if (pointer) pointer.classList.remove('isClicking');
    });
  }

  function renderPointer() {
    pointerAnimationFrame = null;
    const pointer = document.getElementById('tvVirtualPointer');
    if (!pointer) return;

    pointer.style.left = `${mousePos.x}px`;
    pointer.style.top = `${mousePos.y}px`;

    if (isHoveringInteractive) {
      pointer.classList.add('isHovering');
    } else {
      pointer.classList.remove('isHovering');
    }
  }

  window.powerTV = function () {
    if (isBooting) return;

    if (!isTVOn) {

      isTVOn = true;
      isBooting = true;
      updateTvPowerState();
      runPenguindroidBoot();
    } else {

      isTVOn = false;
      isBooting = false;
      currentApp = null;
      updateTvPowerState();
    }
  };

  function runPenguindroidBoot(onComplete) {
    const screenBoot = document.getElementById('tvScreenBoot');
    const screenHome = document.getElementById('tvScreenHome');
    const screenOff = document.getElementById('tvScreenOff');
    const screenApp = document.getElementById('tvScreenApp');
    const pointer = document.getElementById('tvVirtualPointer');

    if (screenOff) screenOff.classList.remove('active');
    if (screenHome) screenHome.classList.remove('active');
    if (screenApp) screenApp.classList.remove('active');
    if (pointer) pointer.classList.remove('active');

    if (screenBoot) {
      screenBoot.classList.add('active');
      updateAmbilight('#fc00ff');

      setTimeout(() => {
        screenBoot.classList.remove('active');
        isBooting = false;

        if (typeof onComplete === 'function') {
          onComplete();
        } else {
          if (screenHome) screenHome.classList.add('active');
          updateAmbilight('#22d3ee');
        }
      }, 2600); 
    } else {
      isBooting = false;
      if (screenHome) screenHome.classList.add('active');
      if (typeof onComplete === 'function') onComplete();
    }
  }

  function updateTvPowerState() {
    const tvDisplay = document.getElementById('tvDisplay');
    const led = document.getElementById('ledNotif');
    const ambilight = document.getElementById('tvAmbilight');
    const screenOff = document.getElementById('tvScreenOff');
    const screenHome = document.getElementById('tvScreenHome');
    const screenApp = document.getElementById('tvScreenApp');
    const screenBoot = document.getElementById('tvScreenBoot');
    const pointer = document.getElementById('tvVirtualPointer');

    if (!tvDisplay) return;

    if (isTVOn) {

      tvDisplay.classList.add('tv-on');
      if (led) {
        led.classList.add('online');
        led.classList.remove('standby');
      }
      if (ambilight) ambilight.classList.add('active');
      if (screenOff) screenOff.classList.remove('active');

      if (!isBooting) {
        if (currentApp) {
          if (screenApp) screenApp.classList.add('active');
          if (screenHome) screenHome.classList.remove('active');
        } else {
          if (screenHome) screenHome.classList.add('active');
          if (screenApp) screenApp.classList.remove('active');
        }
      }
    } else {

      tvDisplay.classList.remove('tv-on');
      if (led) {
        led.classList.remove('online');
        led.classList.add('standby');
      }
      if (ambilight) ambilight.classList.remove('active');
      if (screenOff) screenOff.classList.add('active');
      if (screenBoot) screenBoot.classList.remove('active');
      if (screenHome) screenHome.classList.remove('active');
      if (screenApp) screenApp.classList.remove('active');
      if (pointer) pointer.classList.remove('active');
    }
  }

  window.rebootTV = function () {
    if (isBooting) return;
    isTVOn = true;
    isBooting = true;
    currentApp = null;
    const appViewport = document.getElementById('tvAppViewport');
    if (appViewport) appViewport.innerHTML = '';

    updateTvPowerState();
    runPenguindroidBoot(() => {
      window.tvGoHome();
    });
  };

  window.maxTv = function (forceState) {
    const tvContainer = document.getElementById('tvContainer');
    const tvSection = document.getElementById('tvSection');

    if (typeof forceState === 'boolean') {
      isMaximized = forceState;
    } else {
      isMaximized = !isMaximized;
    }

    document.body.classList.toggle('tv-fullscreen-mode', isMaximized);
    if (tvSection) tvSection.classList.toggle('tv-fullscreen-mode', isMaximized);
    if (tvContainer) tvContainer.classList.toggle('tv-maximized', isMaximized);
  };

  window.tvGoHome = function () {
    if (!isTVOn) {
      window.powerTV();
      return;
    }

    currentApp = null;
    const screenHome = document.getElementById('tvScreenHome');
    const screenApp = document.getElementById('tvScreenApp');
    const screenProfile = document.getElementById('tvScreenProfile');
    const screenSettings = document.getElementById('tvScreenSettings');
    const screenDownloads = document.getElementById('tvScreenDownloads');
    const appViewport = document.getElementById('tvAppViewport');

    if (appViewport) appViewport.innerHTML = '';
    if (screenApp) screenApp.classList.remove('active');
    if (screenProfile) screenProfile.classList.remove('active');
    if (screenSettings) screenSettings.classList.remove('active');
    if (screenDownloads) screenDownloads.classList.remove('active');
    if (screenHome) screenHome.classList.add('active');

    updateAmbilight('#22d3ee');
  };

  function renderTvHome() {
    initHeroCarousel();
    renderAppsRow();
    bindTvInteractions();
  }

  function initHeroCarousel() {
    const backdropWrapper = document.getElementById('carouselBackdropWrapper');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');
    const carouselEl = document.getElementById('tvHeroCarousel');

    if (backdropWrapper) {
      backdropWrapper.innerHTML = CAROUSEL_PROJECT_IDS.map((id, idx) => {
        const p = TV_PROJECTS[id];
        const img = p.backdrop || p.thumb;
        return `<div class="carouselBackdropSlide ${idx === 0 ? 'active' : ''}" data-project-id="${id}" style="background-image: url('${img}');"></div>`;
      }).join('');
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = CAROUSEL_PROJECT_IDS.map((id, idx) => {
        return `<button type="button" class="carouselDot tvInteractive ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="${TV_PROJECTS[id].title}"></button>`;
      }).join('');

      dotsContainer.querySelectorAll('.carouselDot').forEach(dot => {
        dot.onclick = () => {
          const idx = parseInt(dot.getAttribute('data-idx'), 10);
          setCarouselSlide(idx);
        };
      });
    }

    if (prevBtn) {
      prevBtn.onclick = () => {
        let prevIdx = currentCarouselIdx - 1;
        if (prevIdx < 0) prevIdx = CAROUSEL_PROJECT_IDS.length - 1;
        setCarouselSlide(prevIdx);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        let nextIdx = (currentCarouselIdx + 1) % CAROUSEL_PROJECT_IDS.length;
        setCarouselSlide(nextIdx);
      };
    }

    if (carouselEl) {
      carouselEl.addEventListener('mouseenter', () => { isCarouselPaused = true; });
      carouselEl.addEventListener('mouseleave', () => { isCarouselPaused = false; });
    }

    startCarouselTimer();
    setCarouselSlide(0);
  }

  function startCarouselTimer() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
      if (!isTVOn || isBooting || isCarouselPaused || currentApp) return;
      let nextIdx = (currentCarouselIdx + 1) % CAROUSEL_PROJECT_IDS.length;
      setCarouselSlide(nextIdx);
    }, 4500); 
  }

  function setCarouselSlide(idx) {
    if (idx < 0 || idx >= CAROUSEL_PROJECT_IDS.length) return;
    currentCarouselIdx = idx;
    const projId = CAROUSEL_PROJECT_IDS[idx];
    featuredProjectId = projId;

    const slides = document.querySelectorAll('.carouselBackdropSlide');
    slides.forEach((slide, sIdx) => {
      if (sIdx === idx) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    const dots = document.querySelectorAll('.carouselDot');
    dots.forEach((dot, dIdx) => {
      if (dIdx === idx) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    updateHeroContent(projId);
  }

  function updateHeroContent(projectId) {
    const p = TV_PROJECTS[projectId] || TV_PROJECTS['ahorcado'];
    const catEl = document.getElementById('tvHeroCategory');
    const tagsEl = document.getElementById('tvHeroTags');
    const titleEl = document.getElementById('tvHeroTitle');
    const descEl = document.getElementById('tvHeroDesc');
    const playBtn = document.getElementById('tvHeroPlayBtn');
    const codeBtn = document.getElementById('tvHeroCodeBtn');

    if (catEl) catEl.textContent = p.badge;
    if (tagsEl) tagsEl.textContent = p.tags;
    if (titleEl) titleEl.textContent = p.title;
    if (descEl) descEl.textContent = p.desc;

    if (playBtn) {
      playBtn.onclick = () => window.launchTvApp(p.id);
      const span = playBtn.querySelector('span');
      if (span) {
        if (p.type === 'gallery') span.textContent = 'Ver Capturas';
        else span.textContent = 'Iniciar Demo';
      }
    }
    if (codeBtn) {
      if (p.code && p.code !== '#') {
        codeBtn.href = p.code;
        codeBtn.style.display = 'inline-flex';
      } else {
        codeBtn.style.display = 'none';
      }
    }
  }

  window.updateTvSpotlight = function (projectId) {
    const idx = CAROUSEL_PROJECT_IDS.indexOf(projectId);
    if (idx !== -1) {
      setCarouselSlide(idx);
    } else if (TV_PROJECTS[projectId]) {
      updateHeroContent(projectId);
    }
  };

  function renderAppsRow() {
    const gamesRow = document.getElementById('tvGamesRow');
    const systemRow = document.getElementById('tvSystemAppsRow');

    if (gamesRow) {
      const gameKeys = ['ahorcado', 'encryptor', 'qlosucio', 'project_dwa', 'penguin'];
      gamesRow.innerHTML = gameKeys.map(k => createAppTileHtml(TV_PROJECTS[k])).join('');
    }

    if (systemRow) {
      const sysKeys = ['project_petservices', 'cocovainilla', 'sueldos', 'downloads', 'profile', 'settings'];
      systemRow.innerHTML = sysKeys.map(k => createAppTileHtml(TV_PROJECTS[k])).join('');
    }
  }

  function createAppTileHtml(p) {
    return `
      <div class="tvAppTile tvInteractive" data-app-id="${p.id}" tabindex="0" title="${p.title}">
        <div class="tileIconWrapper">
          ${p.iconSvg}
        </div>
        <div class="tileInfo">
          <div class="tileTitle">${p.title}</div>
          <div class="tileCategory">${p.badge}</div>
        </div>
      </div>
    `;
  }

  function initSearchFeature() {
    const searchInput = document.getElementById('tvSearchInput');
    const clearBtn = document.getElementById('tvSearchClear');
    const noResults = document.getElementById('tvNoSearchResults');

    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();

      if (query.length > 0) {
        if (clearBtn) clearBtn.style.display = 'inline-flex';
      } else {
        if (clearBtn) clearBtn.style.display = 'none';
      }

      filterApps(query);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {

        const visibleTile = document.querySelector('.tvAppTile:not([style*="display: none"])');
        if (visibleTile) {
          const appId = visibleTile.getAttribute('data-app-id');
          if (appId) window.launchTvApp(appId);
        }
      } else if (e.key === 'Escape') {
        searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        filterApps('');
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        filterApps('');
        searchInput.focus();
      });
    }
  }

  function filterApps(query) {
    const allTiles = document.querySelectorAll('.tvAppTile');
    const noResults = document.getElementById('tvNoSearchResults');
    let visibleCount = 0;
    let firstMatchedId = null;

    allTiles.forEach(tile => {
      const appId = tile.getAttribute('data-app-id');
      const p = TV_PROJECTS[appId];

      if (!p) return;

      const matches = !query || 
        p.title.toLowerCase().includes(query) ||
        p.tags.toLowerCase().includes(query) ||
        p.badge.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);

      if (matches) {
        tile.style.display = 'flex';
        visibleCount++;
        if (!firstMatchedId) firstMatchedId = p.id;
      } else {
        tile.style.display = 'none';
      }
    });

    if (firstMatchedId) {
      window.updateTvSpotlight(firstMatchedId);
    }

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'flex' : 'none';
    }
  }

  function bindTvInteractions() {
    const profBtn = document.getElementById('tvProfileQuickBtn');
    if (profBtn) {
      profBtn.onclick = () => window.launchTvApp('profile');
    }

    const quickDlBtn = document.getElementById('tvQuickDownloadBtn');
    if (quickDlBtn) {
      quickDlBtn.onclick = () => window.launchTvApp('downloads');
    }

    document.querySelectorAll('.tvAppTile').forEach(tile => {
      tile.addEventListener('click', () => {
        const appId = tile.getAttribute('data-app-id');
        if (appId) window.launchTvApp(appId);
      });

      tile.addEventListener('mouseenter', () => {
        const appId = tile.getAttribute('data-app-id');
        if (appId && TV_PROJECTS[appId]) {
          window.updateTvSpotlight(appId);
        }
      });
    });

    const exitAppBtn = document.getElementById('tvExitAppBtn');
    if (exitAppBtn) exitAppBtn.onclick = () => window.tvGoHome();

    const reloadAppBtn = document.getElementById('tvReloadAppBtn');
    if (reloadAppBtn) {
      reloadAppBtn.onclick = () => {
        if (currentApp) window.launchTvApp(currentApp);
      };
    }

    const expandAppBtn = document.getElementById('tvExpandAppBtn');
    if (expandAppBtn) expandAppBtn.onclick = () => window.maxTv();

    const closeProfileBtn = document.getElementById('tvCloseProfileBtn');
    if (closeProfileBtn) closeProfileBtn.onclick = () => window.tvGoHome();

    const closeSettingsBtn = document.getElementById('tvCloseSettingsBtn');
    if (closeSettingsBtn) closeSettingsBtn.onclick = () => window.tvGoHome();

    const closeDownloadsBtn = document.getElementById('tvCloseDownloadsBtn');
    if (closeDownloadsBtn) closeDownloadsBtn.onclick = () => window.tvGoHome();

    const fsCloseBtn = document.getElementById('tvFullscreenCloseBtn');
    if (fsCloseBtn) fsCloseBtn.onclick = () => window.maxTv(false);

    if (!window._tvEscapeBound) {
      window._tvEscapeBound = true;
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMaximized) {
          window.maxTv(false);
        }
      });
    }
  }

  window.launchTvApp = function (appId) {
    if (!isTVOn) {
      isTVOn = true;
      isBooting = true;
      updateTvPowerState();
      runPenguindroidBoot(() => {
        window.launchTvApp(appId);
      });
      return;
    }

    const p = TV_PROJECTS[appId];
    if (!p) return;

    currentApp = appId;

    const screenHome = document.getElementById('tvScreenHome');
    const screenApp = document.getElementById('tvScreenApp');
    const screenProfile = document.getElementById('tvScreenProfile');
    const screenSettings = document.getElementById('tvScreenSettings');
    const screenDownloads = document.getElementById('tvScreenDownloads');
    const appViewport = document.getElementById('tvAppViewport');
    const appTitle = document.getElementById('tvAppTitle');

    if (screenHome) screenHome.classList.remove('active');

    if (appId === 'profile') {
      if (screenApp) screenApp.classList.remove('active');
      if (screenSettings) screenSettings.classList.remove('active');
      if (screenDownloads) screenDownloads.classList.remove('active');
      if (screenProfile) screenProfile.classList.add('active');
      updateAmbilight('#6366f1');
      return;
    }

    if (appId === 'settings') {
      if (screenApp) screenApp.classList.remove('active');
      if (screenProfile) screenProfile.classList.remove('active');
      if (screenDownloads) screenDownloads.classList.remove('active');
      if (screenSettings) screenSettings.classList.add('active');
      updateAmbilight('#a855f7');
      return;
    }

    if (appId === 'downloads') {
      if (screenApp) screenApp.classList.remove('active');
      if (screenProfile) screenProfile.classList.remove('active');
      if (screenSettings) screenSettings.classList.remove('active');
      if (screenDownloads) screenDownloads.classList.add('active');
      updateAmbilight('#22d3ee');
      return;
    }

    if (screenProfile) screenProfile.classList.remove('active');
    if (screenSettings) screenSettings.classList.remove('active');
    if (screenDownloads) screenDownloads.classList.remove('active');
    if (screenApp) screenApp.classList.add('active');

    if (appTitle) appTitle.textContent = p.title;

    if (appViewport) {
      appViewport.innerHTML = `
        <div class="tvAppLoader">
          <div class="tvSpinner"></div>
          <span>Iniciando ${p.title}...</span>
        </div>
      `;

      setTimeout(() => {
        if (p.type === 'gallery') {
          let currentImgIdx = 0;
          const totalImgs = p.images.length;
          function syncView() {
            const mainImg = appViewport.querySelector('.tvGalleryMainImg');
            const caption = appViewport.querySelector('.tvGalleryCaption');
            const dots = appViewport.querySelectorAll('.tvGalleryDot');
            if (mainImg) mainImg.src = p.images[currentImgIdx];
            if (caption) caption.textContent = (currentImgIdx + 1) + ' / ' + totalImgs + ' • ' + p.captions[currentImgIdx];
            dots.forEach((dot, idx) => {
              if (idx === currentImgIdx) dot.classList.add('active');
              else dot.classList.remove('active');
            });
          }
          appViewport.innerHTML = `
            <div class="tvGalleryViewer">
              <div class="tvGalleryHeader">
                <span class="tvGalleryBadge">
                  <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>${p.id === 'penguin' ? 'PROYECTO CONFIDENCIAL • DEMOSTRACIÓN VISUAL' : 'CAPTURAS GAMEPLAY • UNITY 6 (URP)'}</span>
                </span>
                <span class="tvGalleryCaption">1 / ${totalImgs} • ${p.captions[0]}</span>
              </div>
              <div class="tvGalleryStage">
                <button type="button" class="tvGalleryNavBtn prev" aria-label="Captura Anterior">
                  <svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <img class="tvGalleryMainImg" src="${p.images[0]}" alt="${p.title}">
                <button type="button" class="tvGalleryNavBtn next" aria-label="Siguiente Captura">
                  <svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
              <div class="tvGalleryFooter">
                ${p.images.map((_, i) => `<button type="button" class="tvGalleryDot ${i === 0 ? 'active' : ''}" data-idx="${i}" aria-label="Foto ${i + 1}"></button>`).join('')}
              </div>
            </div>
          `;
          const prevBtn = appViewport.querySelector('.tvGalleryNavBtn.prev');
          const nextBtn = appViewport.querySelector('.tvGalleryNavBtn.next');
          const dots = appViewport.querySelectorAll('.tvGalleryDot');
          if (prevBtn) {
            prevBtn.onclick = () => {
              currentImgIdx = (currentImgIdx - 1 + totalImgs) % totalImgs;
              syncView();
            };
          }
          if (nextBtn) {
            nextBtn.onclick = () => {
              currentImgIdx = (currentImgIdx + 1) % totalImgs;
              syncView();
            };
          }
          dots.forEach(dot => {
            dot.onclick = () => {
              currentImgIdx = parseInt(dot.getAttribute('data-idx'), 10) || 0;
              syncView();
            };
          });
          updateAmbilight(p.id === 'project_dwa' ? '#10b981' : '#0284c7');
        } else if (p.type === 'video') {
          appViewport.innerHTML = `
            <video class="tvVideoPlayer" src="${p.url}" autoplay controls controlsList="nodownload"></video>
          `;
          updateAmbilight('#00dbde');
        } else if (p.type === 'download') {
          appViewport.innerHTML = `
            <div class="tvDownloadPrompt">
              <div class="downloadIconBox">
                ${p.iconSvg}
              </div>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <div class="downloadActions">
                <a href="${p.url}" download class="tvActionBtn primary">
                  <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span>Descargar .EXE</span>
                </a>
                <a href="${p.code}" target="_blank" rel="noopener" class="tvActionBtn secondary">
                  <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  <span>Ver Código en GitHub</span>
                </a>
              </div>
            </div>
          `;
          updateAmbilight('#fc00ff');
        } else {
          appViewport.innerHTML = `
            <iframe class="tvIframe" src="${p.url}" frameborder="0" allowfullscreen title="${p.title}"></iframe>
          `;
          updateAmbilight('#22d3ee');
        }
      }, 400);
    }
  };

  function updateAmbilight(colorHex) {
    const ambilight = document.getElementById('tvAmbilight');
    if (ambilight) {
      ambilight.style.setProperty('--ambilight-color', colorHex);
    }
  }

  window.playGameOnTv = function (projectId) {
    if (typeof window.closeAllShelfPreviews === 'function') {
      window.closeAllShelfPreviews();
    }
    const id = projectId.toLowerCase().replace(/[^a-z0-9]/g, '');
    let matchedKey = 'ahorcado';
    if (id.includes('ahorcado')) matchedKey = 'ahorcado';
    else if (id.includes('encrypt') || id.includes('jar')) matchedKey = 'encryptor';
    else if (id.includes('sucio')) matchedKey = 'qlosucio';
    else if (id.includes('dwa')) matchedKey = 'project_dwa';
    else if (id.includes('pet')) matchedKey = 'project_petservices';
    else if (id.includes('penguin')) matchedKey = 'penguin';
    else if (id.includes('coco')) matchedKey = 'cocovainilla';
    else if (id.includes('sueldo')) matchedKey = 'sueldos';

    window.launchTvApp(matchedKey);

    const tv = document.getElementById('tvSection');
    if (tv) tv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  window.playdemovid = function () {
    window.launchTvApp('penguin');
    const tv = document.getElementById('tvSection');
    if (tv) tv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  window.displayGHProf = function () {
    window.launchTvApp('profile');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAndroidTV);
  } else {
    initAndroidTV();
  }

  document.addEventListener('sectionLoaded', (e) => {
    if (e.detail && e.detail.name === 'proyectos') {
      setTimeout(initAndroidTV, 100);
    }
  });

})();
