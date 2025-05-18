export const proyectos = {
    title: "Proyectos | JAR Portfolio",
    html:`
    <section id="tvSection">
        <div id="tvContainer">
            <div id="tvDisplay"></div>
            <div id="ledNotif"></div>
            <div id="tvButtons">
                <button id="tvPower" class="tvBtn" onclick="powerTV()"></button>
                <button id="tvReboot" class="tvBtn" onclick="rebootTV()"></button>
                <button id="tvResize" class="tvBtn" onclick="maxTv()"></button>
                <button id="tvHome" class="tvBtn"  onclick="displayGHProf()"></button><!--homeAction() nombre de la funcion final-->
            </div>
        </div>
    </section>
    <div class="soundbarContainer">
        <div class="speaker">
            <div class="speakerCore"></div>

        </div>
        <div class="speakerTm">
            <h6 class="speakerTag">JAR SOUNDBAR</h6>
        </div>
        <div class="speaker">
            <div class="speakerCore"></div>
        </div>
    </div>
    <div class="libraryProjects">
        <div class="arbolito">
            <img src="./Resources/Images/Texturas/planta.png" alt="arbol" class="arbolPic">
        </div>
        <div class="gamesContainer">
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">Penguin</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <button id="Penguin" class="stableBtn" onclick="playdemovid()">▶ Video</button>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">Ahorcado</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <a href="https://agustinriondini.github.io/Ahorcado/" target="_blank" class="projectLink">Online</a>
                            <button id="Ahorcado" class="stableBtn" onclick="playGameOnTv(this.id)">▶Jugar</button>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">Encryptor</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <a href="https://agustinriondini.github.io/J.A.R-Encryptor/" target="_blank" class="projectLink">Probar</a>
                            <button id="J.A.R-Encryptor" class="stableBtn" onclick="playGameOnTv(this.id)">▶Jugar</button>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">Cocovainilla</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <a href="https://www.cocovainilla.com.ar" class="projectLink" target="_blank">Ver</a>
                            <a href="#" class="projectLink" target="_blank" onclick="showalert(event)">Codigo</a>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">Portfolio</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <a href="https://github.com/agustinriondini/portfolioevolved" target="_blank" class="projectLink">Codigo</a>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">Sueldos</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <a href="./Resources/Others/JAR-Soft_CDS_v0.1.2.exe" download="JARSoft_CalculadoraSueldosV0.1.2.exe" class="projectLink"><img src="./Resources/Images/Icons/download.png" class="projectLinkImg">.exe</a>
                            <a href="https://github.com/agustinriondini/Calculadora-de-sueldo-C-" class="projectLink">Codigo</a>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">Simulator</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <a href="https://agustinriondini.github.io/neosimulator/" target="_blank" class="projectLink">Online</a>
                            <a href="https://github.com/agustinriondini/neosimulator" class="projectLink">Codigo</a>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="gameBox">
                <div class="projectOnLibrary">
                    <h4 class="projectOnLibraryTitle">QLosucio</h4>
                </div>
                <div class="projectExpanded">
                    <div class="coverContainer">
                        <div class="leftCover">
                            <a href="https://agustinriondini.github.io/qlosucio/" target="_blank" class="projectLink">Online</a>
                            <button id="qlosucio" class="stableBtn" onclick="playGameOnTv(this.id)">▶Jugar</button>
                        </div>
                        <div class="rightCover">
                            <div class="cdContainer">
                                <img src="./Resources/Images/Icons/cd.jpg" alt="Carátula del juego" class="projectThumbail">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
        <div class="consola">
            <img src="./Resources/Images/Texturas/xbox.png" alt="" class="consolaPic">
        </div>
    </div>
    <script src="./Resources/kernel/jarsoft/news.js"></script>
    <script src="./Resources/kernel/code/animations.js"></script>
    <script src="./Resources/kernel/TV-code/estanteria.js"></script>

`,
stylesheetlist:  [
    "./Resources/UI/projects.css",
    "./Resources/UI/estanteTv.css",
    "./Resources/UI/tvdisplay.css"
],
scripts: [
    "./Resources/kernel/jarsoft/news.js",
    "./Resources/kernel/code/animations.js",
    "./Resources/kernel/TV-code/estanteria.js",
    "./Resources/kernel/TV-code/expand.js",
    "./Resources/kernel/TV-code/pushGame.js",
    "./Resources/kernel/TV-code/tvEnhancer.js",
    "./Resources/kernel/code/orderlist.js"
]  
}