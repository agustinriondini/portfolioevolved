export const formacion = {
    title: "Formación | JAR Portfolio",
    html: `
    <div class="formacionDashboard">

        <section class="formacionSection">
            <div class="sectionHeader">
                <span class="sectionPill">TRAYECTORIA EDUCATIVA</span>
                <h2 class="sectionTitle">Formación Académica</h2>
                <p class="sectionDesc">Estudios universitarios y especializaciones técnicas en desarrollo y programación.</p>
            </div>

            <div class="academicGrid">

                <div class="academicCard">
                    <div class="academicTop">
                        <div class="institutionLogoWrapper">
                            <img src="./Resources/Images/Instituciones/UTN_vsinc.png" alt="UTN FRGP Logo" class="institutionLogo">
                        </div>
                        <div class="academicStatusBadge suspended">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="10" y1="15" x2="10" y2="9"></line>
                                <line x1="14" y1="15" x2="14" y2="9"></line>
                            </svg>
                            <span>Suspendido</span>
                        </div>
                    </div>

                    <div class="academicBody">
                        <span class="academicDegree">Tecnicatura Universitaria</span>
                        <h3 class="academicCareer">Tecnicatura en Programación</h3>
                        <h4 class="academicInstitution">Universidad Tecnológica Nacional (UTN FRGP)</h4>
                        <p class="academicDesc">
                            Formación técnica universitaria con enfoque en lógica algorítmica, estructuras de datos, programación orientada a objetos y especialización en lenguaje C++.
                        </p>
                        <div class="academicTags">
                            <span class="tag">C++</span>
                            <span class="tag">Algoritmos</span>
                            <span class="tag">Estructuras de Datos</span>
                            <span class="tag">Lógica POO</span>
                        </div>
                    </div>

                    <div class="academicFooter">
                        <a href="https://www.frgp.utn.edu.ar/" target="_blank" rel="noopener" class="academicActionBtn">
                            <span>Sitio Oficial UTN</span>
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="academicCard">
                    <div class="academicTop">
                        <div class="institutionLogoWrapper aluraLogoBg">
                            <img src="./Resources/Images/Instituciones/Alura-ONE_vsinc.png" alt="Oracle Next Education Logo" class="institutionLogo">
                        </div>
                        <div class="academicStatusBadge completed">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="8" r="6"></circle>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                            </svg>
                            <span>Finalizado</span>
                        </div>
                    </div>

                    <div class="academicBody">
                        <span class="academicDegree">Especialización Profesional</span>
                        <h3 class="academicCareer">Desarrollo Web Front-End</h3>
                        <h4 class="academicInstitution">Oracle Next Education | Alura Latam</h4>
                        <p class="academicDesc">
                            Programa intensivo de formación tecnológica respaldado por Oracle y Alura. Adquisición de competencias sólidas en maquetación web, JavaScript moderno, buenas prácticas de desarrollo y resolución de desafíos empresariales reales.
                        </p>
                        <div class="academicTags">
                            <span class="tag">HTML5</span>
                            <span class="tag">CSS3</span>
                            <span class="tag">JavaScript ES6+</span>
                            <span class="tag">Desafíos ONE</span>
                        </div>
                    </div>

                    <div class="academicFooter">
                        <a href="https://www.aluracursos.com/" target="_blank" rel="noopener" class="academicActionBtn">
                            <span>Portal Alura</span>
                            <svg class="svg-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <section class="formacionSection">
            <div class="sectionHeader">
                <span class="sectionPill">HISTORIAL LABORAL</span>
                <h2 class="sectionTitle">Experiencias Laborales</h2>
                <p class="sectionDesc">Trayectoria en soporte técnico, gestión administrativa, liderazgo de equipos y administración de sistemas.</p>
            </div>

            <div class="experienceGrid">

                <div class="experienceCard highlightedExp">
                    <div class="expHeader">
                        <div class="expMetaLeft">
                            <div class="expCompanyBadge">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                                <span>Sector Público & Registral</span>
                            </div>
                            <h3 class="expRole">Administrativo & Soporte IT Onsite</h3>
                            <h4 class="expCompany">DNRPA | Seccional RS01141</h4>
                        </div>
                        <div class="expPeriodBadge active">
                            <span class="periodDot"></span>
                            <span>2017 — Actualmente</span>
                        </div>
                    </div>

                    <div class="expBody">
                        <p class="expSummary">
                            Administración integral de seccional registral, atención al usuario, gestión de sistemas provinciales y nacionales, y soporte técnico onsite a estaciones de trabajo.
                        </p>
                        <div class="expTasksList">
                            <span class="taskChip">Soporte IT Onsite</span>
                            <span class="taskChip">Firmas Digitales</span>
                            <span class="taskChip">Sistemas Sugit / Sucerp / Aras</span>
                            <span class="taskChip">Data Entry & Facturación</span>
                            <span class="taskChip">Gestión de Proveedores</span>
                            <span class="taskChip">Arqueo de Caja & Cuentas</span>
                            <span class="taskChip">Trámites de Reincidencias</span>
                        </div>
                    </div>

                    <div class="expFooter">
                        <a href="https://www.dnrpa.gov.ar/portal_dnrpa/" target="_blank" rel="noopener" class="expActionBtn">
                            <span>Portal DNRPA</span>
                            <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="experienceCard">
                    <div class="expHeader">
                        <div class="expMetaLeft">
                            <div class="expCompanyBadge">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span>Gastronomía & Liderazgo</span>
                            </div>
                            <h3 class="expRole">Supervisor de Capacitación</h3>
                            <h4 class="expCompany">Fastfood Sudamericana S.A | Alsea</h4>
                        </div>
                        <div class="expPeriodBadge">
                            <span>2016 — 2017</span>
                        </div>
                    </div>

                    <div class="expBody">
                        <p class="expSummary">
                            Supervisión de personal, capacitación técnica para ingresantes y mandos de planta, administración de turnos y control presupuestario de sucursal Olivos.
                        </p>
                        <div class="expTasksList">
                            <span class="taskChip">Capacitación de Personal</span>
                            <span class="taskChip">Análisis de Stock</span>
                            <span class="taskChip">Control Presupuestario</span>
                            <span class="taskChip">Gestión de Turnos</span>
                            <span class="taskChip">Liderazgo de Planta</span>
                        </div>
                    </div>

                    <div class="expFooter">
                        <a href="https://www.alsea.net/" target="_blank" rel="noopener" class="expActionBtn">
                            <span>Grupo Alsea</span>
                            <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="experienceCard">
                    <div class="expHeader">
                        <div class="expMetaLeft">
                            <div class="expCompanyBadge">
                                <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#22d3ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>Telecomunicaciones & Soporte</span>
                            </div>
                            <h3 class="expRole">Soporte Técnico & Ventas</h3>
                            <h4 class="expCompany">CAT Technologies</h4>
                        </div>
                        <div class="expPeriodBadge">
                            <span>2015</span>
                        </div>
                    </div>

                    <div class="expBody">
                        <p class="expSummary">
                            Atención técnica telefónica a usuarios de televisión por cable (CATV), resolución de incidencias en enlace y comercialización de servicios de contenido.
                        </p>
                        <div class="expTasksList">
                            <span class="taskChip">Soporte a Clientes CATV</span>
                            <span class="taskChip">Resolución de Incidencias</span>
                            <span class="taskChip">Venta de Paquetes</span>
                            <span class="taskChip">Gestión Telefónica</span>
                        </div>
                    </div>

                    <div class="expFooter">
                        <a href="https://cat-technologies.com/" target="_blank" rel="noopener" class="expActionBtn">
                            <span>CAT Technologies</span>
                            <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>

    </div>
    `,
    stylesheet: "./Resources/UI/formacion.css",
    scripts: ["./Resources/kernel/code/orderlist.js"]
};
