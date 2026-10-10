export const profile = {
    title: "Perfil | JAR Portfolio",
    html:`
    <section id=profile>
        <div class="idcontainer">
            <h3>Riondini Juan Agustin</h3>
            <img src="./Resources/Images/Meta/profile.jpg" alt="Riondini jaun agustin profile pic" class="profilepic">
            <div class="idsubcontainer">
                <button type="button" class="idbuttons" onclick="pushtodev()" title="Desarrollo">Dev <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></button>
            </div>
            <span class="portfolio_model_release" title="Modelo de portfolio">SPA-porftolio</span>
        </div>
        <article>
            <h2 class="sectionSubtitle">SOBRE MI</h2>
            <p>Soy un estudiante de programación en la Universidad Tecnológica Nacional. Inicié mi trayectoria en el desarrollo web a principios de 2022, aprovechando una beca otorgada por Alura y Oracle Next Education. Mi compromiso con la excelencia académica me ha llevado a continuar profundizando mis conocimientos en el ámbito del desarrollo web, mientras simultáneamente me dedico al estudio de lenguajes como C++ y C# en la universidad.</p>
            <p>El presente perfil representa la versión más moderna y actualizada de mi portfolio hasta la fecha. Este proyecto ha sido desarrollado íntegramente utilizando HTML, CSS y JavaScript, destacando mi habilidad y experiencia en estas tecnologías fundamentales. A medida que avanzo en mi formación, busco constantemente perfeccionar mis habilidades y adquirir nuevos conocimientos para contribuir de manera significativa en proyectos futuros.</p>
            <p>Está usted invitado cordialmente a explorar mi portfolio para conocer más acerca de mis proyectos y sus respectivos repositorios.</p>
            <p>¡Espero que disfrute navegando por mi trabajo y quedo a su disposición para cualquier consulta o colaboración!</p>
        </article>
    </section>`,
    stylesheet: "./Resources/UI/profile.css",
    scripts:  [ "./Resources/kernel/code/orderlist.js",
                "./Resources/kernel/code/oldrecalls.js"
    ] 
    }