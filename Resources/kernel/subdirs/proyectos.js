export const proyectos = {
    title: "Proyectos | JAR Portfolio",
    html: `

    <section id="tvSection">

        <div id="tvAmbilight" class="tvAmbilight"></div>

        <div id="tvContainer" class="tvContainer">
            <div id="tvBezel" class="tvBezel">

                <div id="tvDisplay" class="tvDisplay">

                    <div id="tvVirtualPointer" class="tvVirtualPointer">
                        <div class="pointerGlow"></div>
                        <div class="pointerRing"></div>
                        <div class="pointerDot"></div>
                    </div>

                    <div id="tvScreenOff" class="tvScreenLayer tvOffLayer active">
                        <div class="standbyReflection"></div>
                        <div class="standbyCenterPrompt tvInteractive" onclick="powerTV()">
                            <div class="powerCirclePulse">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                    <line x1="12" y1="2" x2="12" y2="12"></line>
                                </svg>
                            </div>
                            <span class="standbyText">Encender Penguindroid TV</span>
                        </div>
                    </div>

                    <div id="tvScreenBoot" class="tvScreenLayer tvBootLayer">
                        <div class="tvBootAtomContainer">
                            <div class="tvAtomLoader">
                                <div class="tvOrbitas"></div>
                                <div class="tvNucleus"></div>
                                <div class="tvProton"></div>
                                <div class="tvProton"></div>
                                <div class="tvProton"></div>
                                <div class="tvNeutron"></div>
                                <div class="tvNeutron"></div>
                                <div class="tvNeutron"></div>
                            </div>
                            <div class="tvBootTitle">Penguindroid <span>OS</span></div>
                            <div class="tvBootSubtitle">Iniciando sistema...</div>
                        </div>
                    </div>

                    <div id="tvScreenHome" class="tvScreenLayer tvHomeLayer">

                        <header class="tvStatusBar">
                            <div class="statusLeft">
                                <span class="tvBrandTag">JAR<span>TV</span></span>
                                <span class="tvClockText" id="tvLiveClock">12:00</span>
                            </div>
                            <div class="statusCenter">
                                <div class="tvSearchBar tvInteractive">
                                    <svg class="svg-icon searchIcon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input type="text" id="tvSearchInput" class="tvSearchInput" placeholder="Buscar proyectos, demos y apps..." autocomplete="off" spellcheck="false">
                                    <button type="button" id="tvSearchClear" class="tvSearchClear" title="Limpiar" style="display:none;">
                                        <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="statusRight">
                                <button class="tvQuickDownloadBtn tvInteractive" id="tvQuickDownloadBtn" title="Descargas de CV (PDF)">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <span>CV</span>
                                </button>
                                <span class="statusIcon" title="Wi-Fi Conectado">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                                        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                                        <line x1="12" y1="20" x2="12.01" y2="20"></line>
                                    </svg>
                                </span>
                                <span class="statusIcon" title="Google Cast Activo">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                                        <line x1="2" y1="20" x2="2.01" y2="20"></line>
                                    </svg>
                                </span>
                                <button class="tvProfileQuickBtn tvInteractive" id="tvProfileQuickBtn" title="Ver Perfil de Juan Agustín">
                                    <span class="avatarText">JAR</span>
                                </button>
                            </div>
                        </header>

                        <div class="tvScrollContent" id="tvScrollContent">

                            <section class="tvHeroCarousel" id="tvHeroCarousel">

                                <div class="carouselBackdropWrapper" id="carouselBackdropWrapper">

                                </div>

                                <div class="carouselGradientOverlay"></div>

                                <div class="carouselContentOverlay">
                                    <div class="carouselMeta">
                                        <span class="carouselCategoryBadge" id="tvHeroCategory">JUEGO DESTACADO</span>
                                        <span class="carouselTags" id="tvHeroTags">JavaScript • HTML5 Canvas</span>
                                    </div>
                                    <h2 class="carouselTitle" id="tvHeroTitle">Ahorcado Game</h2>
                                    <p class="carouselDesc" id="tvHeroDesc">Clásico juego del ahorcado interactivo con interfaz retro y animaciones fluidas.</p>

                                    <div class="carouselActionRow">
                                        <div class="carouselButtonsLeft">
                                            <button class="tvActionBtn primary tvInteractive" id="tvHeroPlayBtn">
                                                <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                                <span>Iniciar en TV</span>
                                            </button>
                                            <a class="tvActionBtn secondary tvInteractive" id="tvHeroCodeBtn" target="_blank" rel="noopener">
                                                <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="16 18 22 12 16 6"></polyline>
                                                    <polyline points="8 6 2 12 8 18"></polyline>
                                                </svg>
                                                <span>Código</span>
                                            </a>
                                        </div>

                                        <div class="carouselControlsGroup">
                                            <button type="button" class="carouselNavBtn prev tvInteractive" id="carouselPrevBtn" title="Proyecto Anterior">
                                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                            </button>
                                            <div class="carouselDotsContainer" id="carouselDots">

                                            </div>
                                            <button type="button" class="carouselNavBtn next tvInteractive" id="carouselNextBtn" title="Siguiente Proyecto">
                                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div class="tvAppsContainer">

                                <section class="tvAppsSection" id="tvGamesSection">
                                    <div class="tvSectionHeader">
                                        <h3 class="tvRowTitle">Juegos & Simuladores</h3>
                                        <span class="tvRowHint">Selecciona para jugar</span>
                                    </div>
                                    <div class="tvAppsRow" id="tvGamesRow">

                                    </div>
                                </section>

                                <section class="tvAppsSection" id="tvSystemSection">
                                    <div class="tvSectionHeader">
                                        <h3 class="tvRowTitle">Aplicaciones & Sistema</h3>
                                        <span class="tvRowHint">Herramientas y perfil</span>
                                    </div>
                                    <div class="tvAppsRow" id="tvSystemAppsRow">

                                    </div>
                                </section>
                            </div>

                            <div id="tvNoSearchResults" class="tvNoSearchResults" style="display:none;">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span>No se encontraron proyectos con ese término.</span>
                            </div>

                        </div>
                    </div>

                    <div id="tvScreenApp" class="tvScreenLayer tvAppLayer">

                        <div class="tvAppTopBar">
                            <button class="tvBackHomeBtn tvInteractive" id="tvExitAppBtn" title="Volver al Menú Home">
                                <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>Menú TV</span>
                            </button>
                            <div class="tvAppRunningTitle" id="tvAppTitle">Aplicación</div>
                            <div class="tvAppControls">
                                <button class="tvAppToolBtn tvInteractive" id="tvReloadAppBtn" title="Reiniciar App">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="23 4 23 10 17 10"></polyline>
                                        <polyline points="1 20 1 14 7 14"></polyline>
                                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                    </svg>
                                </button>
                                <button class="tvAppToolBtn tvInteractive" id="tvExpandAppBtn" title="Pantalla Completa">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <polyline points="9 21 3 21 3 15"></polyline>
                                        <line x1="21" y1="3" x2="14" y2="10"></line>
                                        <line x1="3" y1="21" x2="10" y2="14"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="tvAppViewport" id="tvAppViewport"></div>
                    </div>

                    <div id="tvScreenProfile" class="tvScreenLayer tvProfileLayer">
                        <div class="tvAppTopBar">
                            <button class="tvBackHomeBtn tvInteractive" id="tvCloseProfileBtn" title="Cerrar y volver al Launcher">
                                <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>Menú TV</span>
                            </button>
                            <div class="tvAppRunningTitle">Perfil del Desarrollador</div>
                            <div class="tvAppControls"></div>
                        </div>
                        <div class="tvProfileContent">
                            <div class="profileCardLeft">
                                <img src="./Resources/Images/Meta/profile.jpg" alt="Juan Agustín Riondini" class="tvProfilePic">
                                <h3 class="tvProfileName">Juan Agustín Riondini</h3>
                                <p class="tvProfileRole">Desarrollador Web & Programador</p>
                                <span class="tvProfileTag">UTN FRGP • Alura Oracle ONE</span>
                                <div class="tvProfileLinks">
                                    <a href="https://github.com/agustinriondini" target="_blank" rel="noopener" class="tvActionBtn primary tvInteractive">
                                        <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                        <span>GitHub</span>
                                    </a>
                                </div>
                                <div class="tvProfileCvDownloads">
                                    <span class="tvCvDownloadsTitle">Descargar Currículum Vitae (PDF):</span>
                                    <div class="tvCvButtonsRow">
                                        <a href="./Resources/Others/CV_riondini_IT.pdf" download="CV_riondini_IT.pdf" class="tvActionBtn secondary tvInteractive" title="Descargar CV Perfil IT">
                                            <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                            <span>CV IT (PDF)</span>
                                        </a>
                                        <a href="./Resources/Others/CV_riondini_Soft.pdf" download="CV_riondini_Soft.pdf" class="tvActionBtn secondary tvInteractive" title="Descargar CV Perfil Software">
                                            <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                            <span>CV Software (PDF)</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="profileCardRight">
                                <h4 class="tvBioTitle">Sobre Mí</h4>
                                <p class="tvBioText">
                                    Soy estudiante de programación en la Universidad Tecnológica Nacional (UTN). Inicié mi trayectoria en el desarrollo web mediante una beca otorgada por Alura y Oracle Next Education.
                                </p>
                                <p class="tvBioText">
                                    Me enfoco en el desarrollo web con HTML5, CSS3 y JavaScript moderno, complementando con lógica y programación en C++ y C# en la universidad.
                                </p>
                                <div class="tvStackBadges">
                                    <span class="stackBadge">HTML5</span>
                                    <span class="stackBadge">CSS3</span>
                                    <span class="stackBadge">JavaScript</span>
                                    <span class="stackBadge">C++</span>
                                    <span class="stackBadge">MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tvScreenSettings" class="tvScreenLayer tvSettingsLayer">
                        <div class="tvAppTopBar">
                            <button class="tvBackHomeBtn tvInteractive" id="tvCloseSettingsBtn" title="Cerrar y volver al Launcher">
                                <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>Menú TV</span>
                            </button>
                            <div class="tvAppRunningTitle">Ajustes del Sistema</div>
                            <div class="tvAppControls"></div>
                        </div>
                        <div class="tvSettingsContent">
                            <div class="settingGroup">
                                <h4>Control del Dispositivo</h4>
                                <div class="settingButtons">
                                    <button class="tvActionBtn secondary tvInteractive" onclick="rebootTV()">
                                        <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="23 4 23 10 17 10"></polyline>
                                            <polyline points="1 20 1 14 7 14"></polyline>
                                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                        </svg>
                                        <span>Reiniciar Penguindroid OS</span>
                                    </button>
                                    <button class="tvActionBtn secondary tvInteractive" onclick="powerTV()">
                                        <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                            <line x1="12" y1="2" x2="12" y2="12"></line>
                                        </svg>
                                        <span>Poner en Espera</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tvScreenDownloads" class="tvScreenLayer tvDownloadsLayer">
                        <div class="tvAppTopBar">
                            <button class="tvBackHomeBtn tvInteractive" id="tvCloseDownloadsBtn" title="Cerrar y volver al Launcher">
                                <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>Menú TV</span>
                            </button>
                            <div class="tvAppRunningTitle">Centro de Descargas • Currículum Vitae</div>
                            <div class="tvAppControls"></div>
                        </div>
                        <div class="tvDownloadsContent">
                            <div class="tvDownloadsHeaderNotice">
                                <p class="tvNoticeText">Selecciona y descarga el CV en PDF según el perfil técnico requerido:</p>
                            </div>
                            <div class="tvDownloadCardsGrid">

                                <div class="tvDownloadCard tvInteractive">
                                    <div class="downloadCardBadge it">PERFIL IT</div>
                                    <div class="downloadCardIcon">
                                        <svg class="svg-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                                        </svg>
                                    </div>
                                    <h3 class="downloadCardTitle">CV Perfil IT & Soporte</h3>
                                    <p class="downloadCardDesc">Infraestructura tecnológica, redes informáticas, soporte a usuarios, hardware y gestión de sistemas operativos.</p>
                                    <div class="downloadFileBadge">
                                        <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                        <span>CV_riondini_IT.pdf</span>
                                    </div>
                                    <a href="./Resources/Others/CV_riondini_IT.pdf" download="CV_riondini_IT.pdf" class="tvActionBtn primary tvInteractive" id="tvDlItBtn">
                                        <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        <span>Descargar PDF (IT)</span>
                                    </a>
                                </div>

                                <div class="tvDownloadCard tvInteractive">
                                    <div class="downloadCardBadge soft">SOFTWARE DEV</div>
                                    <div class="downloadCardIcon">
                                        <svg class="svg-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="16 18 22 12 16 6"></polyline>
                                            <polyline points="8 6 2 12 8 18"></polyline>
                                        </svg>
                                    </div>
                                    <h3 class="downloadCardTitle">CV Perfil Software Developer</h3>
                                    <p class="downloadCardDesc">Desarrollo Frontend & Backend, JavaScript moderno, aplicaciones C++, lógica C#, arquitectura web y APIs.</p>
                                    <div class="downloadFileBadge">
                                        <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                        <span>CV_riondini_Soft.pdf</span>
                                    </div>
                                    <a href="./Resources/Others/CV_riondini_Soft.pdf" download="CV_riondini_Soft.pdf" class="tvActionBtn primary tvInteractive" id="tvDlSoftBtn">
                                        <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        <span>Descargar PDF (Software)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <button type="button" id="tvFullscreenCloseBtn" class="tvFullscreenCloseBtn tvInteractive" title="Salir de Pantalla Completa (Esc)">
                    <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>Cerrar Pantalla Completa (Esc)</span>
                </button>

                <div class="tvBottomChin">
                    <span class="tvLogoBadge">PENGUINDROID TV</span>
                    <div id="ledNotif" class="tvLedIndicator standby" title="Estado de TV"></div>
                </div>

            </div>

            <div id="tvControlsBar" class="tvControlsBar">
                <button id="tvPowerBtn" class="tvHwBtn" title="Encender / Apagar">
                    <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                        <line x1="12" y1="2" x2="12" y2="12"></line>
                    </svg>
                </button>
                <button id="tvHomeBtn" class="tvHwBtn" title="Menú Home">
                    <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </button>
                <button id="tvRestartBtn" class="tvHwBtn" title="Reiniciar TV">
                    <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                </button>
                <button id="tvMaxBtn" class="tvHwBtn" title="Maximizar / Tamaño Normal">
                    <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                </button>
            </div>
        </div>
    </section>

    <div class="soundbarContainer">
        <div class="speaker"><div class="speakerCore"></div></div>
        <div class="speakerTm">
            <h6 class="speakerTag">JAR SOUNDBAR 2.1</h6>
        </div>
        <div class="speaker"><div class="speakerCore"></div></div>
    </div>

    <div class="libraryProjects">



        <ul class="gamesContainer">

            <li class="gameBox" data-project-id="penguin">
                <div class="projectSpine">
                    <span class="spineTag">CORE</span>
                    <h4 class="projectOnLibraryTitle">Penguin</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <button type="button" class="caseCloseBtn" title="Cerrar">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div class="caseDetails">
                            <span class="caseBadge">CONFIDENCIAL • CORE</span>
                            <h5 class="caseTitle">Penguin Platform</h5>
                            <p class="caseSubtitle">Identity & Workspace Manager</p>
                            <div class="caseActions">
                                <button class="shelfActionBtn playBtn" onclick="playGameOnTv('penguin')">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                        <polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                    <span>Ver Capturas</span>
                                </button>
                                <span class="shelfActionBtn lockBtn" title="Proyecto Confidencial (NDA)">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <span>Confidencial</span>
                                </span>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Preview/penguin_dashboard.png" alt="Disco Penguin" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="project_dwa">
                <div class="projectSpine">
                    <span class="spineTag">UNITY</span>
                    <h4 class="projectOnLibraryTitle">Project-DWA</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <button type="button" class="caseCloseBtn" title="Cerrar">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div class="caseDetails">
                            <span class="caseBadge">CONFIDENCIAL • UNITY 3D</span>
                            <h5 class="caseTitle">Project-DWA</h5>
                            <p class="caseSubtitle">Unity 6 • URP</p>
                            <div class="caseActions">
                                <button class="shelfActionBtn playBtn" onclick="playGameOnTv('project_dwa')">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                        <polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                    <span>Ver Capturas</span>
                                </button>
                                <span class="shelfActionBtn lockBtn" title="Proyecto Confidencial (NDA)">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <span>Confidencial</span>
                                </span>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Preview/dwa_front.png" alt="Disco Project-DWA" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="project_petservices">
                <div class="projectSpine">
                    <span class="spineTag">KOTLIN</span>
                    <h4 class="projectOnLibraryTitle">PetServices</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <button type="button" class="caseCloseBtn" title="Cerrar">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div class="caseDetails">
                            <span class="caseBadge">CONFIDENCIAL • MOBILE</span>
                            <h5 class="caseTitle">Project-PetServices</h5>
                            <p class="caseSubtitle">Android & Node.js</p>
                            <div class="caseActions">
                                <button class="shelfActionBtn playBtn" onclick="playGameOnTv('project_petservices')">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                    <span>Detalles TV</span>
                                </button>
                                <span class="shelfActionBtn lockBtn" title="Proyecto Confidencial (NDA)">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <span>Confidencial</span>
                                </span>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Disco PetServices" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="portfolio">
                <div class="projectSpine">
                    <span class="spineTag">SPA</span>
                    <h4 class="projectOnLibraryTitle">Portfolio</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <div class="caseDetails">
                            <span class="caseBadge">PROYECTO</span>
                            <h5 class="caseTitle">Portfolio</h5>
                            <p class="caseSubtitle">SPA Retro-Moderna</p>
                            <div class="caseActions">
                                <a href="https://github.com/agustinriondini/portfolioevolved" target="_blank" rel="noopener" class="shelfActionBtn codeBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                    <span>Ver Código</span>
                                </a>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Preview/protfolioevolved.png" alt="Disco Portfolio" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="ahorcado">
                <div class="projectSpine">
                    <span class="spineTag">JS</span>
                    <h4 class="projectOnLibraryTitle">Ahorcado</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <div class="caseDetails">
                            <span class="caseBadge">JUEGO WEB</span>
                            <h5 class="caseTitle">Ahorcado</h5>
                            <p class="caseSubtitle">HTML5 Canvas & JS</p>
                            <div class="caseActions">
                                <button class="shelfActionBtn playBtn" onclick="playGameOnTv('Ahorcado')">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                    <span>Jugar en TV</span>
                                </button>
                                <a href="https://agustinriondini.github.io/Ahorcado/" target="_blank" rel="noopener" class="shelfActionBtn linkBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span>Online</span>
                                </a>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Preview/ahorcadoV2.0.png" alt="Disco Ahorcado" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="encryptor">
                <div class="projectSpine">
                    <span class="spineTag">CRYPTO</span>
                    <h4 class="projectOnLibraryTitle">Encryptor</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <div class="caseDetails">
                            <span class="caseBadge">HERRAMIENTA</span>
                            <h5 class="caseTitle">Encryptor</h5>
                            <p class="caseSubtitle">Cifrador Web</p>
                            <div class="caseActions">
                                <button class="shelfActionBtn playBtn" onclick="playGameOnTv('J.A.R-Encryptor')">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                    <span>Jugar en TV</span>
                                </button>
                                <a href="https://agustinriondini.github.io/J.A.R-Encryptor/" target="_blank" rel="noopener" class="shelfActionBtn linkBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span>Online</span>
                                </a>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Preview/encriptadorv2.png" alt="Disco Encryptor" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="cocovainilla">
                <div class="projectSpine">
                    <span class="spineTag">WEB</span>
                    <h4 class="projectOnLibraryTitle">Cocovainilla</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <div class="caseDetails">
                            <span class="caseBadge">E-COMMERCE</span>
                            <h5 class="caseTitle">Cocovainilla</h5>
                            <p class="caseSubtitle">Tienda Web Online</p>
                            <div class="caseActions">
                                <a href="https://www.cocovainilla.com.ar" target="_blank" rel="noopener" class="shelfActionBtn linkBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span>Ver Sitio</span>
                                </a>
                                <a href="https://github.com/agustinriondini" target="_blank" rel="noopener" class="shelfActionBtn codeBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                    <span>Código</span>
                                </a>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Preview/gestoria.png" alt="Disco Cocovainilla" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="sueldos">
                <div class="projectSpine">
                    <span class="spineTag">EXE</span>
                    <h4 class="projectOnLibraryTitle">Sueldos</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <div class="caseDetails">
                            <span class="caseBadge">DESKTOP C++</span>
                            <h5 class="caseTitle">Sueldos</h5>
                            <p class="caseSubtitle">Calculadora Salarial</p>
                            <div class="caseActions">
                                <a href="./Resources/Others/JAR-Soft_CDS_v0.1.2.exe" download="JARSoft_CalculadoraSueldosV0.1.2.exe" class="shelfActionBtn downloadBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <span>Descargar</span>
                                </a>
                                <a href="https://github.com/agustinriondini/Calculadora-de-sueldo-C-" target="_blank" rel="noopener" class="shelfActionBtn codeBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                    <span>Código</span>
                                </a>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Preview/calculadora-sueldo.png" alt="Disco Sueldos" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="gameBox" data-project-id="qlosucio">
                <div class="projectSpine">
                    <span class="spineTag">ARCADE</span>
                    <h4 class="projectOnLibraryTitle">QLosucio</h4>
                </div>
                <div class="projectExpanded">
                    <div class="caseWrapper">
                        <div class="caseDetails">
                            <span class="caseBadge">ARCADE RETRO</span>
                            <h5 class="caseTitle">QLosucio</h5>
                            <p class="caseSubtitle">Juego Arcade Web</p>
                            <div class="caseActions">
                                <button class="shelfActionBtn playBtn" onclick="playGameOnTv('qlosucio')">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                    <span>Jugar en TV</span>
                                </button>
                                <a href="https://agustinriondini.github.io/qlosucio/" target="_blank" rel="noopener" class="shelfActionBtn linkBtn">
                                    <svg class="svg-icon svg-btn-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span>Online</span>
                                </a>
                            </div>
                        </div>
                        <div class="discSleeve">
                            <div class="cdDisc">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Disco QLosucio" class="cdArtwork">
                                <div class="cdCenterHole"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        </ul>

        <div class="consola">
            <img src="./Resources/Images/Texturas/xbox.png" alt="Consola decorativa" class="consolaPic">
        </div>
    </div>

    <section class="projectsDashboardSection">
        <div class="projectsDashboard">
            <div class="sectionHeader">
                <span class="sectionPill">CATÁLOGO DE PROYECTOS</span>
                <h2 class="sectionTitle">Proyectos & Desarrollos</h2>
                <p class="sectionDesc">Detalle técnico, estado y plataformas de las aplicaciones desarrolladas.</p>
            </div>

            <div class="projectsAccordion" id="projectsAccordion">

                <div class="projectAccordionItem" data-project="penguindroid">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Penguindroid OS</h3>
                            <span class="platformBadge android">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="4" y1="19" x2="4" y2="15"></line>
                                    <line x1="20" y1="19" x2="20" y2="15"></line>
                                    <rect x="6" y="9" width="12" height="11" rx="2"></rect>
                                    <path d="M7 6a5 5 0 0 1 10 0"></path>
                                    <line x1="9" y1="3" x2="8" y2="1"></line>
                                    <line x1="15" y1="3" x2="16" y2="1"></line>
                                    <circle cx="9" cy="5" r="0.5" fill="currentColor"></circle>
                                    <circle cx="15" cy="5" r="0.5" fill="currentColor"></circle>
                                </svg>
                                <span>Android</span>
                            </span>
                            <span class="statusBadge en-curso">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>En curso</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator active">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                                <span>Soporte Activo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22c55e" stroke-width="2"><rect x="6" y="9" width="12" height="11" rx="2"></rect><path d="M7 6a5 5 0 0 1 10 0"></path></svg>
                                    <span>Android</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 14c.5 1.5 2 2 3 1"></path></svg>
                                    <span>JavaScript</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><path d="M4 3l16 0-2 16-6 2-6-2z"></path><path d="M8 8h8M8 12h7l-.5 4-2.5 1-2.5-1"></path></svg>
                                    <span>CSS3</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><polyline points="4 3 20 3 18 19 12 21 6 19 4 3"></polyline><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    <span>HTML5</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Sistema operativo simulado de Android TV con launcher interactivo, puntero virtual giroscópico, dock de aplicaciones, barra de estado en vivo y buscador en tiempo real.
                        </p>
                        <div class="projectAccordionActions">
                            <button type="button" class="projectActionBtn primary" onclick="powerTV()">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                    <line x1="12" y1="2" x2="12" y2="12"></line>
                                </svg>
                                <span>Iniciar en TV</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="penguin">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Penguin Platform</h3>
                            <span class="platformBadge web">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span>Web & Core</span>
                            </span>
                            <span class="statusBadge en-curso">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>En curso</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator active">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                                <span>Soporte Activo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22c55e" stroke-width="2"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z"></path></svg>
                                    <span>Node.js 24</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#64748b" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect></svg>
                                    <span>Express 5</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 14c.5 1.5 2 2 3 1"></path></svg>
                                    <span>Vanilla JS (ESM)</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                    <span>Vite</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#6366f1" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                    <span>MySQL 8+</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                    <span>NPM Workspaces</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Plataforma fundacional y modular de Jarsoft que orquesta identidades (IdP/SSO centralizado con MFA nativo), espacios de trabajo multi-tenant con matriz de autorización dinámica, frontend modular Shell en Vanilla JS y Vite, aprovisionamiento transaccional en dos fases y microservicio de workers para tareas diferidas. Este proyecto es confidencial y propietario.
                        </p>
                        <div class="projectGalleryStrip">
                            <figure class="galleryThumbItem" onclick="playGameOnTv('penguin')">
                                <img src="./Resources/Images/Preview/penguin_dashboard.png" alt="Penguin Dashboard">
                                <figcaption>Dashboard Central</figcaption>
                            </figure>
                            <figure class="galleryThumbItem" onclick="playGameOnTv('penguin')">
                                <img src="./Resources/Images/Preview/penguin_identity.png" alt="Penguin Identity">
                                <figcaption>Gestión de Identidad & MFA</figcaption>
                            </figure>
                            <figure class="galleryThumbItem" onclick="playGameOnTv('penguin')">
                                <img src="./Resources/Images/Preview/penguin_helpcenter.png" alt="Penguin Help Center">
                                <figcaption>Centro de Conocimiento</figcaption>
                            </figure>
                        </div>
                        <div class="projectAccordionActions">
                            <button type="button" class="projectActionBtn primary" onclick="playGameOnTv('penguin')">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                                <span>Ver Capturas en TV</span>
                            </button>
                            <span class="projectActionBtn confidential">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <span>Código Privado (Confidencial)</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="project_dwa">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Project-DWA</h3>
                            <span class="platformBadge windows">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="8" height="8"></rect>
                                    <rect x="13" y="3" width="8" height="8"></rect>
                                    <rect x="3" y="13" width="8" height="8"></rect>
                                    <rect x="13" y="13" width="8" height="8"></rect>
                                </svg>
                                <span>Windows</span>
                            </span>
                            <span class="statusBadge en-curso">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>En curso</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator active">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                                <span>Soporte Activo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                    <span>Unity 6</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="10" y1="8" x2="10" y2="16"></line><line x1="14" y1="8" x2="14" y2="16"></line></svg>
                                    <span>C#</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ec4899" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                    <span>URP</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                    <span>ScriptableObjects</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#6366f1" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                                    <span>Editor Scripting</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22c55e" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="3"></rect><path d="M7 12h10M12 7v10"></path></svg>
                                    <span>Data-Driven Architecture</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Videojuego 3D de mundo abierto orientado al público infantil desarrollado en Unity 6 (URP). Cuenta con arquitectura modular dividida por Assembly Definitions (Runtime, Editor, Tests), diseño data-driven fundamentado en ScriptableObjects para definición de estadísticas, perfiles de movimiento y arquetipos, herramientas de editor personalizadas (Custom Tools) para acelerar flujos de trabajo e inyección de dependencias descartando singletons globales.
                        </p>
                        <div class="projectGalleryStrip">
                            <figure class="galleryThumbItem" onclick="playGameOnTv('project_dwa')">
                                <img src="./Resources/Images/Preview/dwa_world.png" alt="Project-DWA Mundo Abierto">
                                <figcaption>Mundo Abierto & HUD</figcaption>
                            </figure>
                            <figure class="galleryThumbItem" onclick="playGameOnTv('project_dwa')">
                                <img src="./Resources/Images/Preview/dwa_front.png" alt="Project-DWA Triceratops">
                                <figcaption>Personaje Triceratops</figcaption>
                            </figure>
                        </div>
                        <div class="projectAccordionActions">
                            <button type="button" class="projectActionBtn primary" onclick="playGameOnTv('project_dwa')">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                                <span>Ver Capturas en TV</span>
                            </button>
                            <span class="projectActionBtn confidential">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <span>Código Privado (Confidencial)</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="project_petservices">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Project-PetServices</h3>
                            <span class="platformBadge android">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="4" y1="19" x2="4" y2="15"></line>
                                    <line x1="20" y1="19" x2="20" y2="15"></line>
                                    <rect x="6" y="9" width="12" height="11" rx="2"></rect>
                                    <path d="M7 6a5 5 0 0 1 10 0"></path>
                                    <line x1="9" y1="3" x2="8" y2="1"></line>
                                    <line x1="15" y1="3" x2="16" y2="1"></line>
                                    <circle cx="9" cy="5" r="0.5" fill="currentColor"></circle>
                                    <circle cx="15" cy="5" r="0.5" fill="currentColor"></circle>
                                </svg>
                                <span>Android & Backend</span>
                            </span>
                            <span class="statusBadge en-curso">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>En curso</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator active">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                                <span>Soporte Activo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22c55e" stroke-width="2"><rect x="6" y="9" width="12" height="11" rx="2"></rect><path d="M7 6a5 5 0 0 1 10 0"></path></svg>
                                    <span>Android</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><polygon points="12 2 2 12 12 22 22 12"></polygon></svg>
                                    <span>Kotlin</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><polyline points="4 3 20 3 18 19 12 21 6 19 4 3"></polyline></svg>
                                    <span>Jetpack Compose</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22c55e" stroke-width="2"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z"></path></svg>
                                    <span>Node.js</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#64748b" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect></svg>
                                    <span>Express</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#6366f1" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                    <span>MySQL</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                                    <span>Socket.io</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ec4899" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <span>Google Maps API</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Diseño y desarrollo de una plataforma integral (ecosistema de dos aplicaciones móviles nativas conectadas a un backend centralizado) enfocada en conectar a dueños de mascotas con paseadores profesionales, facilitando logística, seguridad y monitoreo en tiempo real. Implementa arquitectura MVVM con Jetpack Compose nativo, motor de geolocalización y live tracking en segundo plano vía WebSockets, validación por código QR, autenticación biométrica y API RESTful robusta en Node.js/Express con MySQL.
                        </p>
                        <div class="projectAccordionActions">
                            <button type="button" class="projectActionBtn primary" onclick="playGameOnTv('project_petservices')">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                <span>Ver en TV</span>
                            </button>
                            <span class="projectActionBtn confidential">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <span>Código Privado (Confidencial)</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="portfolio">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Portfolio Evolved</h3>
                            <span class="platformBadge web">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span>Web</span>
                            </span>
                            <span class="statusBadge en-curso">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>En curso</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator active">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                                <span>Soporte Activo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 14c.5 1.5 2 2 3 1"></path></svg>
                                    <span>JavaScript</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><polyline points="4 3 20 3 18 19 12 21 6 19 4 3"></polyline><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    <span>HTML5</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><path d="M4 3l16 0-2 16-6 2-6-2z"></path><path d="M8 8h8M8 12h7l-.5 4-2.5 1-2.5-1"></path></svg>
                                    <span>CSS3</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                                    <span>SPA</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Aplicación de página única (SPA) con arquitectura modular sin recarga, estantería física con carátulas dinámicas y centro de comandos adaptativo.
                        </p>
                        <div class="projectAccordionActions">
                            <a href="https://github.com/agustinriondini/portfolioevolved" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span>Ver Código</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="ahorcado">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Ahorcado Game</h3>
                            <span class="platformBadge web">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span>Web</span>
                            </span>
                            <span class="statusBadge finalizado">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Finalizado</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator active">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                                <span>Soporte Activo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 14c.5 1.5 2 2 3 1"></path></svg>
                                    <span>JavaScript</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ec4899" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    <span>HTML5 Canvas</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><path d="M4 3l16 0-2 16-6 2-6-2z"></path><path d="M8 8h8M8 12h7l-.5 4-2.5 1-2.5-1"></path></svg>
                                    <span>CSS3</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Juego interactivo del ahorcado con renderizado visual en HTML5 Canvas, detección de teclado físico y virtual, y lógica reactiva de vidas.
                        </p>
                        <div class="projectAccordionActions">
                            <button type="button" class="projectActionBtn primary" onclick="playGameOnTv('Ahorcado')">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                <span>Jugar en TV</span>
                            </button>
                            <a href="https://agustinriondini.github.io/Ahorcado/" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                <span>Ver Online</span>
                            </a>
                            <a href="https://github.com/agustinriondini/Ahorcado" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span>Código</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="encryptor">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">JAR Encryptor</h3>
                            <span class="platformBadge web">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span>Web</span>
                            </span>
                            <span class="statusBadge finalizado">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Finalizado</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator active">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                                <span>Soporte Activo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 14c.5 1.5 2 2 3 1"></path></svg>
                                    <span>JavaScript</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><polyline points="4 3 20 3 18 19 12 21 6 19 4 3"></polyline><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    <span>HTML5</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><path d="M4 3l16 0-2 16-6 2-6-2z"></path><path d="M8 8h8M8 12h7l-.5 4-2.5 1-2.5-1"></path></svg>
                                    <span>CSS3</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Herramienta de criptografía para cifrado y descifrado de texto mediante reglas algorítmicas con validaciones y estética de consola.
                        </p>
                        <div class="projectAccordionActions">
                            <button type="button" class="projectActionBtn primary" onclick="playGameOnTv('J.A.R-Encryptor')">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                <span>Probar en TV</span>
                            </button>
                            <a href="https://agustinriondini.github.io/J.A.R-Encryptor/" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                <span>Ver Online</span>
                            </a>
                            <a href="https://github.com/agustinriondini/J.A.R-Encryptor" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span>Código</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="cocovainilla">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Cocovainilla</h3>
                            <span class="platformBadge web">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span>Web</span>
                            </span>
                            <span class="statusBadge finalizado">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Finalizado</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator inactive">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <line x1="9" y1="12" x2="15" y2="12"></line>
                                </svg>
                                <span>Soporte Inactivo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><polyline points="4 3 20 3 18 19 12 21 6 19 4 3"></polyline><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    <span>HTML5</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><path d="M4 3l16 0-2 16-6 2-6-2z"></path><path d="M8 8h8M8 12h7l-.5 4-2.5 1-2.5-1"></path></svg>
                                    <span>CSS3</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 14c.5 1.5 2 2 3 1"></path></svg>
                                    <span>JavaScript</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Sitio web e-commerce para catálogo de productos cosméticos con interfaz responsive, galería visual y navegación por categorías.
                        </p>
                        <div class="projectAccordionActions">
                            <a href="https://www.cocovainilla.com.ar" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                <span>Ver Sitio</span>
                            </a>
                            <a href="https://github.com/agustinriondini" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span>Código</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="sueldos">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">Calculadora Sueldos</h3>
                            <span class="platformBadge windows">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="8" height="8"></rect>
                                    <rect x="13" y="3" width="8" height="8"></rect>
                                    <rect x="3" y="13" width="8" height="8"></rect>
                                    <rect x="13" y="13" width="8" height="8"></rect>
                                </svg>
                                <span>Windows</span>
                            </span>
                            <span class="statusBadge finalizado">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Finalizado</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator inactive">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <line x1="9" y1="12" x2="15" y2="12"></line>
                                </svg>
                                <span>Soporte Inactivo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#6366f1" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="11" y1="9" x2="11" y2="15"></line><line x1="8" y1="12" x2="14" y2="12"></line></svg>
                                    <span>C++</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#a855f7" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="10" y1="8" x2="10" y2="16"></line><line x1="14" y1="8" x2="14" y2="16"></line></svg>
                                    <span>C#</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#818cf8" stroke-width="2"><rect x="3" y="3" width="8" height="8"></rect><rect x="13" y="3" width="8" height="8"></rect><rect x="3" y="13" width="8" height="8"></rect><rect x="13" y="13" width="8" height="8"></rect></svg>
                                    <span>Windows Executable</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Aplicación ejecutable para Windows dedicada a la liquidación y cálculo automatizado de salarios, descuentos de ley y aportes previsionales.
                        </p>
                        <div class="projectAccordionActions">
                            <a href="./Resources/Others/JAR-Soft_CDS_v0.1.2.exe" download="JARSoft_CalculadoraSueldosV0.1.2.exe" class="projectActionBtn primary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span>Descargar (.exe)</span>
                            </a>
                            <a href="https://github.com/agustinriondini/Calculadora-de-sueldo-C-" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span>Código</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="projectAccordionItem" data-project="qlosucio">
                    <div class="projectAccordionHeader">
                        <div class="projectHeaderLeft">
                            <h3 class="projectItemTitle">QLosucio Arcade</h3>
                            <span class="platformBadge web">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                <span>Web</span>
                            </span>
                            <span class="statusBadge finalizado">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Finalizado</span>
                            </span>
                        </div>
                        <div class="accordionToggleBtn" aria-label="Expandir o contraer">
                            <svg class="svg-icon icon-expand" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            <svg class="svg-icon icon-collapse" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="projectAccordionBody">
                        <div class="projectMetaRow">
                            <span class="supportIndicator inactive">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <line x1="9" y1="12" x2="15" y2="12"></line>
                                </svg>
                                <span>Soporte Inactivo</span>
                            </span>
                            <div class="techStackGroup">
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 14c.5 1.5 2 2 3 1"></path></svg>
                                    <span>JavaScript</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ec4899" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    <span>HTML5 Canvas</span>
                                </span>
                                <span class="techChip">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    <span>Arcade Retro</span>
                                </span>
                            </div>
                        </div>
                        <p class="projectAccordionDesc">
                            Minijuego estilo arcade retro con loop de animación en requestAnimationFrame, detección de colisiones y tabla de puntuación.
                        </p>
                        <div class="projectAccordionActions">
                            <button type="button" class="projectActionBtn primary" onclick="playGameOnTv('qlosucio')">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                <span>Jugar en TV</span>
                            </button>
                            <a href="https://agustinriondini.github.io/qlosucio/" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                <span>Ver Online</span>
                            </a>
                            <a href="https://github.com/agustinriondini/qlosucio" target="_blank" rel="noopener" class="projectActionBtn secondary">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <span>Código</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `,
    stylesheetlist: [
        "./Resources/UI/projects.css",
        "./Resources/UI/estanteTv.css",
        "./Resources/UI/tvdisplay.css"
    ],
    scripts: [
        "./Resources/kernel/TV-code/androidTV.js",
        "./Resources/kernel/TV-code/estanteria.js",
        "./Resources/kernel/code/animations.js",
        "./Resources/kernel/jarsoft/news.js"
    ]
};