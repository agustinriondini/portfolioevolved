export const skills = {
    title: "Habilidades | JAR Portfolio",
    html: `
    <div class="skillsDashboard">

        <section class="skillsSection">
            <div class="sectionHeader">
                <span class="sectionPill">DOMINADAS & CERTIFICADAS</span>
                <h2 class="sectionTitle">Tecnologías Principales</h2>
                <p class="sectionDesc">Lenguajes y tecnologías fundamentales aplicadas en proyectos completados.</p>
            </div>

            <div class="skillsGrid">

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <img src="./Resources/Images/Langs/html.png" alt="HTML5" class="skillLogo">
                        <span class="skillStatusBadge certified">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="8" r="6"></circle>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                            </svg>
                            <span>Certificado</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">HTML5</h3>
                        <p class="skillIssuer">Oracle Next Education | Alura</p>
                        <p class="skillDetail">Estructura semántica moderna, SEO técnico y maquetación web accesible.</p>
                    </div>
                </div>

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <img src="./Resources/Images/Langs/css3.png" alt="CSS3" class="skillLogo">
                        <span class="skillStatusBadge certified">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="8" r="6"></circle>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                            </svg>
                            <span>Certificado</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">CSS3</h3>
                        <p class="skillIssuer">Oracle Next Education | Alura</p>
                        <p class="skillDetail">Flexbox, CSS Grid, Glassmorphism, animaciones y diseño full responsive.</p>
                    </div>
                </div>

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <img src="./Resources/Images/Langs/js.png" alt="JavaScript" class="skillLogo">
                        <span class="skillStatusBadge certified">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="8" r="6"></circle>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                            </svg>
                            <span>Certificado</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">JavaScript</h3>
                        <p class="skillIssuer">Oracle Next Education | Alura</p>
                        <p class="skillDetail">ES6+, manipulación DOM, lógica modular SPA, eventos interactivos y Canvas.</p>
                    </div>
                </div>

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <img src="./Resources/Images/Langs/c++.png" alt="C++" class="skillLogo">
                        <span class="skillStatusBadge academic">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span>Académico</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">C++</h3>
                        <p class="skillIssuer">Universidad Tecnológica Nacional (UTN)</p>
                        <p class="skillDetail">Programación estructurada, algoritmos, punteros y estructuras de datos.</p>
                    </div>
                </div>

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <img src="./Resources/Images/Langs/sqllogo.png" alt="MySQL" class="skillLogo">
                        <span class="skillStatusBadge dev">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                            </svg>
                            <span>Base de Datos</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">MySQL</h3>
                        <p class="skillIssuer">Formación Online Especializada</p>
                        <p class="skillDetail">Consultas relacionales, diseño de tablas, normalización e integridad de datos.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="skillsSection">
            <div class="sectionHeader">
                <span class="sectionPill backendPill">BACKEND & ARQUITECTURA WEB</span>
                <h2 class="sectionTitle">Desarrollo Backend & Herramientas</h2>
                <p class="sectionDesc">Entornos de ejecución en servidor, autenticación de doble factor, tokens y empaquetado moderno.</p>
            </div>

            <div class="skillsGrid">

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <div class="skillSvgLogo nodeLogo">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2L3 7v10l9 5 9-5V7L12 2z"></path>
                                <polyline points="12 22 12 12"></polyline>
                                <polyline points="3 7 12 12 21 7"></polyline>
                            </svg>
                        </div>
                        <span class="skillStatusBadge backendBadge">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                            </svg>
                            <span>Runtime</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">Node.js</h3>
                        <p class="skillIssuer">JavaScript Server-Side & APIs</p>
                        <p class="skillDetail">Desarrollo de servicios backend, endpoints RESTful, ecosistema npm y programación asíncrona orientada a eventos.</p>
                    </div>
                </div>

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <div class="skillSvgLogo viteLogo">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
                                <path d="M12 2L2 5l4 15 6 2 6-2 4-15-10-3z" stroke="#a855f7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <polygon points="13 3 8 13 13 13 11 21 17 11 12 11" fill="#22d3ee"/>
                            </svg>
                        </div>
                        <span class="skillStatusBadge toolingBadge">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                            <span>Tooling</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">Vite.js</h3>
                        <p class="skillIssuer">Frontend Tooling & Bundler</p>
                        <p class="skillDetail">Servidores de desarrollo ultrarrápidos con Hot Module Replacement (HMR), empaquetado optimizado y configuración moderna de entornos web.</p>
                    </div>
                </div>

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <div class="skillSvgLogo jwtLogo">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ec4899" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <span class="skillStatusBadge authBadge">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <span>Seguridad</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">JWT</h3>
                        <p class="skillIssuer">JSON Web Tokens & Auth</p>
                        <p class="skillDetail">Autenticación basada en tokens sin estado (stateless), protección de rutas, claims y verificación de firmas criptográficas.</p>
                    </div>
                </div>

                <div class="skillCard primarySkill">
                    <div class="cardTop">
                        <div class="skillSvgLogo f2kLogo">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#22d3ee" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <polyline points="9 12 11 14 15 10"></polyline>
                            </svg>
                        </div>
                        <span class="skillStatusBadge f2kBadge">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            <span>2FA / Auth</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">F2K</h3>
                        <p class="skillIssuer">Autenticación Multifactor & Acceso</p>
                        <p class="skillDetail">Mecanismos de autenticación en dos pasos (2FA), validación de factores biométricos/claves y control seguro de sesiones.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="skillsSection learningSection">
            <div class="sectionHeader">
                <span class="sectionPill learningPill">EN PROCESO DE APRENDIZAJE</span>
                <h2 class="sectionTitle">Tecnologías en Formación</h2>
                <p class="sectionDesc">Herramientas y lenguajes en fase activa de estudio, práctica y desarrollo formativo.</p>
            </div>

            <div class="skillsGrid learningGrid">

                <div class="skillCard learningCard">
                    <div class="cardTop">
                        <img src="./Resources/Images/Langs/C%23.png" alt="C#" class="skillLogo">
                        <span class="skillStatusBadge learning">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>Aprendiendo</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">C#</h3>
                        <p class="skillIssuer">Formación Académica & Desktop</p>
                        <p class="skillDetail">Desarrollo orientado a objetos, sintaxis .NET y aplicaciones de escritorio.</p>
                        <div class="learningProgressBar"><div class="progressBarFill csharpFill"></div></div>
                    </div>
                </div>

                <div class="skillCard learningCard">
                    <div class="cardTop">
                        <div class="skillSvgLogo kotlinLogo">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
                                <path d="M22 2H2v20h20L12 12 22 2z" fill="url(#kotlinGradient)"/>
                                <defs>
                                    <linearGradient id="kotlinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#7f52ff"/>
                                        <stop offset="50%" stop-color="#c711e1"/>
                                        <stop offset="100%" stop-color="#e4485d"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span class="skillStatusBadge learning">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>Aprendiendo</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">Kotlin</h3>
                        <p class="skillIssuer">Ecosistema Android</p>
                        <p class="skillDetail">Sintaxis moderna, interoperabilidad con Java y arquitectura Android contemporánea.</p>
                        <div class="learningProgressBar"><div class="progressBarFill kotlinFill"></div></div>
                    </div>
                </div>

                <div class="skillCard learningCard">
                    <div class="cardTop">
                        <div class="skillSvgLogo javaLogo">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#f59e0b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                                <line x1="6" y1="1" x2="6" y2="4"></line>
                                <line x1="10" y1="1" x2="10" y2="4"></line>
                                <line x1="14" y1="1" x2="14" y2="4"></line>
                            </svg>
                        </div>
                        <span class="skillStatusBadge learning">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>Aprendiendo</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">Java</h3>
                        <p class="skillIssuer">Paradigma POO & Backend</p>
                        <p class="skillDetail">Programación orientada a objetos, herencia, interfaces y gestión de paquetes.</p>
                        <div class="learningProgressBar"><div class="progressBarFill javaFill"></div></div>
                    </div>
                </div>

                <div class="skillCard learningCard">
                    <div class="cardTop">
                        <div class="skillSvgLogo unityLogo">
                            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#22d3ee" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5"></path>
                                <path d="M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <span class="skillStatusBadge learning">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>Aprendiendo</span>
                        </span>
                    </div>
                    <div class="cardBody">
                        <h3 class="skillName">Unity</h3>
                        <p class="skillIssuer">Motor de Videojuegos 2D / 3D</p>
                        <p class="skillDetail">Físicas, scripting con C#, ciclo de vida de componentes y escenas interactivas.</p>
                        <div class="learningProgressBar"><div class="progressBarFill unityFill"></div></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="skillsSection">
            <div class="sectionHeader">
                <span class="sectionPill">INFRAESTRUCTURA & HERRAMIENTAS</span>
                <h2 class="sectionTitle">Sistemas y Entornos</h2>
                <p class="sectionDesc">Control de versiones, sistemas operativos, terminales y mantenimiento.</p>
            </div>

            <div class="toolsGrid">

                <div class="toolCard">
                    <div class="toolHeader">
                        <img src="./Resources/Images/Langs/git.png" alt="Git" class="toolIcon">
                        <div>
                            <h4 class="toolTitle">Git & GitHub</h4>
                            <span class="toolSubtitle">Control de Versiones</span>
                        </div>
                    </div>
                    <div class="toolChips">
                        <span class="chip">CLI Git</span>
                        <span class="chip">GitHub Desktop</span>
                        <span class="chip">Repositorios Web</span>
                        <span class="chip">Flujo de Ramas</span>
                    </div>
                </div>

                <div class="toolCard">
                    <div class="toolHeader">
                        <div class="toolSvgIcon droidIcon">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" y1="18" x2="4" y2="20"></line>
                                <line x1="20" y1="18" x2="20" y2="20"></line>
                                <path d="M4 14h16"></path>
                                <rect x="2" y="6" width="20" height="12" rx="3"></rect>
                                <circle cx="8" cy="10" r="1"></circle>
                                <circle cx="16" cy="10" r="1"></circle>
                            </svg>
                        </div>
                        <div>
                            <h4 class="toolTitle">Android Avanzado</h4>
                            <a href="./Resources/Others/devices.txt" target="_blank" download="Devices_list" class="devicesLink">
                                <span>Ver 20+ dispositivos</span>
                                <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        </div>
                    </div>
                    <div class="toolChips">
                        <span class="chip">Fastboot & ADB</span>
                        <span class="chip">Custom ROMs</span>
                        <span class="chip">Stock Recovery</span>
                        <span class="chip">Unbrick Qualcomm</span>
                        <span class="chip">Bootloader Unlock</span>
                    </div>
                </div>

                <div class="toolCard">
                    <div class="toolHeader">
                        <img src="./Resources/Images/Tools/so.png" alt="Windows" class="toolIcon">
                        <div>
                            <h4 class="toolTitle">Windows & Powershell</h4>
                            <span class="toolSubtitle">Administración de Sistemas</span>
                        </div>
                    </div>
                    <div class="toolChips">
                        <span class="chip">PowerShell Scripting</span>
                        <span class="chip">VirtualBox VMs</span>
                        <span class="chip">Mantenimiento de Servicios</span>
                        <span class="chip">Optimización</span>
                    </div>
                </div>

                <div class="toolCard">
                    <div class="toolHeader">
                        <img src="./Resources/Images/Tools/mantenimiento pc.png" alt="Hardware" class="toolIcon">
                        <div>
                            <h4 class="toolTitle">Hardware & Electrónica</h4>
                            <span class="toolSubtitle">Soporte y Reparación</span>
                        </div>
                    </div>
                    <div class="toolChips">
                        <span class="chip">Armado y Reparación PC</span>
                        <span class="chip">Electrónica Don Orione</span>
                        <span class="chip">Diagnóstico de Placas</span>
                        <span class="chip">Soporte Virtual CAT</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="skillsSection">
            <div class="sectionHeader">
                <span class="sectionPill">ORACLE NEXT EDUCATION</span>
                <h2 class="sectionTitle">Logros & Desafíos Completados</h2>
                <p class="sectionDesc">Proyectos entregados y validados durante la especialización Alura ONE.</p>
            </div>

            <div class="achievementsGrid">
                <div class="achievementCard">
                    <img src="./Resources/Images/Desafios ONE/ChallengeONE-AhorcadoGame.png" alt="Ahorcado" class="achievementThumb">
                    <div class="achievementInfo">
                        <h4>Logro Videogame</h4>
                        <p>Juego del Ahorcado con Canvas</p>
                    </div>
                </div>
                <div class="achievementCard">
                    <img src="./Resources/Images/Desafios ONE/ChallengeONE-Ecommerce.png" alt="Ecommerce" class="achievementThumb">
                    <div class="achievementInfo">
                        <h4>Logro E-Commerce</h4>
                        <p>Plataforma comercial interactiva</p>
                    </div>
                </div>
                <div class="achievementCard">
                    <img src="./Resources/Images/Desafios ONE/ChallengeONE-Encriptadordetexto.png" alt="Encriptador" class="achievementThumb">
                    <div class="achievementInfo">
                        <h4>Logro Codificador</h4>
                        <p>Encriptador y desencriptador de texto</p>
                    </div>
                </div>
                <div class="achievementCard">
                    <img src="./Resources/Images/Desafios ONE/ChallengeONE-Portfolio.png" alt="Portfolio" class="achievementThumb">
                    <div class="achievementInfo">
                        <h4>Logro Portfolio</h4>
                        <p>Portfolio profesional responsivo</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="skillsSection">
            <div class="sectionHeader">
                <span class="sectionPill">GESTIÓN & EMPRESA</span>
                <h2 class="sectionTitle">Competencias Corporativas</h2>
                <p class="sectionDesc">Software de gestión empresarial, procesamiento de bases y ofimática avanzada.</p>
            </div>

            <div class="enterpriseGrid">
                <div class="enterpriseCard">
                    <h4 class="entTitle">SAP Web (SURA)</h4>
                    <p class="entDesc">Gestión integral de tickets, facturación corporativa, control de suministros y uso de web services de seguros SURA.</p>
                </div>
                <div class="enterpriseCard">
                    <h4 class="entTitle">Office Avanzado</h4>
                    <p class="entDesc">Manejo intensivo de Excel (fórmulas complejas, filtros y bases), Word técnico, presentaciones en PowerPoint y gestión Outlook.</p>
                </div>
                <div class="enterpriseCard">
                    <h4 class="entTitle">Dataprep & Calidad de Datos</h4>
                    <p class="entDesc">Corrección, depuración, formateo y normalización de bases de datos para soporte y administración.</p>
                </div>
            </div>
        </section>

    </div>
    `,
    stylesheet: "./Resources/UI/skills.css",
    scripts: ["./Resources/kernel/code/orderlist.js"]
};