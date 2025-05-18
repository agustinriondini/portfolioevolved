export const formacion = {
    title: "Formación | JAR Portfolio",
    html: `
        <section id="formacion"><!--Formacion-->
        <h2 class="sectionSubtitle">Formación Académica</h2>
        <div class="formacionContainer">
            <div class="collegeCard">
                <div title="utn-frgp-logo" class="collegePic">
                <img id="UTN_pic" alt="utn-frgp-logo" src="./Resources/Images/Instituciones/UTN_vsinc.png">
                </div>
                <div class="collegeData">
                    <h4 class="collegeName">Universidad Tecnologica Nacional (UTN Argentina)</h4>
                    <h5 class="varios">Tecnicatura Universitaria en programacion</h5>
                    <h5 class="varios">En curso</h5>
                    <p class="collegeInfo">
                        Actualmente estoy cursando la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional (UTN), donde adquiero conocimientos en lógica general y me especializo en el lenguaje de programación C++.</p>
                    <a href="https://www.frgp.utn.edu.ar/" target="_blank" class="jobLink">Ver mas</a>
                </div>
            </div>
        </div>
        <div class="formacionContainer">
            <div class="collegeCard">
                <div title="alura-one-logo" class="collegePic">
                <img id="Alura_pic" alt="alura-one-logo" src="./Resources/Images/Instituciones/Alura-ONE_vsinc.png"></div>
                <div class="collegeData">
                    <h4 class="collegeName">Alura | Oracle Next Education</h4>
                    <h5 class="varios">Desarrollo web</h5>
                    <h5 class="varios">Finalizado</h5>
                    <p class="collegeInfo">
                        He completado con éxito el programa de desarrollo web, auspiciado por Oracle Next Education y Alura. Esta experiencia me ha proporcionado habilidades sólidas y actualizadas en el campo, respaldando mi formación con enfoque práctico y orientado a la industria.</p>
                    <a href="https://www.aluracursos.com/" target="_blank" class="jobLink">Ver mas</a>
                </div>
            </div>
        </div>
    </section>
    <section id="xp">
        <h2 class="xpsubtitle">Otras experiencias laborales</h2>
        <div class="xpContainer">
            <div class="jobs">
                <div class="jobFirstData">
                    <h3 class="jobTitle">CAT Technologies</h3>
                    <h4 class="jobSub">Ventas | Soporte tecnico</h4>
                    <h4 class="jobSub">Finalizado en 2015</h4>
                </div>
                <div class="joblist">
                    <ul class="order">
                        <li>Soporte a clientes CATV</li>
                        <li>Venta de paquetes de contenido</li>
                    </ul>
                </div>
                <div class="jobLastData">
                    <h4 class="jobSub">Ver mas de C.A.T Technologies</h4>
                    <a href="https://cat-technologies.com/?utm_term&utm_campaign=Display%20-%20Branding&utm_source=adwords&utm_medium=ppc&hsa_acc=1595374680&hsa_cam=20952611914&hsa_grp&hsa_ad&hsa_src=x&hsa_tgt&hsa_kw&hsa_mt&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiA2eKtBhDcARIsAEGTG43-kD11p-Hk2Mrqo9Ncr_Eet9rFxtP9TlZyku7Cm2jIBRzbnmqjB7EaApKEEALw_wcB" target="_blank" class="jobLink">Buscar empresa</a>
                </div>
            </div>
            <div class="jobs">
                <div class="jobFirstData">
                    <h3 class="jobTitle">DNRPA | RS01141</h3>
                    <h4 class="jobSub">Administrativo</h4>
                    <h4 class="jobSub">Actualmente. Desde 07/08/2017</h4>
                </div>
                <div class="joblist">
                    <ul class="order">
                        <li>Data entry</li>
                        <li>Facturacion</li>
                        <li>Sugit</li>
                        <li>Sucerp</li>
                        <li>Aras</li>
                        <li>Gestion proveedores</li>
                        <li>Atencion al usuario</li>
                        <li>Soporte IT onsite</li>
                        <li>Gestion de firmas digitales</li>
                        <li>Gestion de tramite reincidencias</li>
                        <li>Gestion de caja, arqueo y cuentas</li>
                    </ul>
                </div>
                <div class="jobLastData">
                    <h4 class="jobSub">Ver mas de Direccion Nacional del Registro de la Propiedad Automotor, seccional 01141</h4>
                    <a href="https://www.dnrpa.gov.ar/portal_dnrpa/" target="_blank" class="jobLink">Buscar DNRPA</a>
                </div>
            </div>
            <div class="jobs">
                <div class="jobFirstData">
                    <h3 class="jobTitle">Fastfood S.A</h3>
                    <h4 class="jobSub">Supervisor de capacitacion | Local Olivos</h4>
                    <h4 class="jobSub">Desde 10/12/2016 al 07/08/2017</h4>
                </div>
                <div class="joblist">
                    <ul class="order">
                        <li>Gestion y analisis de presupuesto del local</li>
                        <li>Capacitacion ingresantes</li>
                        <li>Capacitacion de planta y gerencia</li>
                        <li>Analisis de stock</li>
                        <li>Gestion del personal de turno</li>
                    </ul>
                </div>
                <div class="jobLastData">
                    <h4 class="jobSub">Ver mas de Alsea | Fastfood Sudamericana S.A</h4>
                    <a href="https://www.alsea.net/" target="_blank" class="jobLink">Buscar empresa</a>
                </div>
            </div>
        </div>
    </section>
    <script src="../kernel/mobilecmdcenter.js"></script>
    <script src="/Resources/kernel/orderlist.js"></script>
            
        </section>
    `,
    stylesheet: "./Resources/UI/formacion.css",
    scripts: [  "./Resources/kernel/code/orderlist.js"] 
};
