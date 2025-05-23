export const buildFooter = `
    <div class="footerContainer">
        <div class="footerBoxes">
            <ul class="wrapper">
                <li class="icon facebook" data-link="https://www.facebook.com/agustin.riondini.94/">
                    <span class="tooltip">Facebook</span>
                    <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </li>
                <li class="icon github" data-link="https://github.com/agustinriondini">
                    <span class="tooltip">Github</span>
                    <a href=""></a>
                    <svg height="1.8em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="github">
                        <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.287-.011-1.246-.017-2.25-3.338.724-4.043-1.605-4.043-1.605-.546-1.384-1.333-1.754-1.333-1.754-1.087-.742.083-.726.083-.726 1.202.084 1.835 1.236 1.835 1.236 1.067 1.826 2.8 1.298 3.482.992.107-.773.418-1.298.763-1.597-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.469-2.386 1.236-3.228-.124-.303-.536-1.527.117-3.176 0 0 1.007-.322 3.301 1.227a11.505 11.505 0 0 1 3.003-.404c1.018.004 2.036.137 3.003.404 2.293-1.549 3.301-1.227 3.301-1.227.655 1.649.241 2.873.118 3.176.769.842 1.236 1.915 1.236 3.228 0 4.615-2.807 5.63-5.478 5.93.43.37.814 1.098.814 2.22 0 1.604-.014 2.896-.017 3.287 0 .319.218.694.825.577A12.002 12.002 0 0 0 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
                    </svg>
                </li>
                <li class="icon instagram" data-link="https://www.instagram.com/agustinriondini/">
                    <span class="tooltip">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg"height="1.2em"fill="currentColor"class="bi bi-instagram"viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
                </li>
                <li class="icon email" data-link="mailto:juan.riondini@gmail.com">
                    <span class="tooltip">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" class="bi bi-email" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0h12a1 1 0 0 1 1 1v.5l-7 4.5-7-4.5V5a1 1 0 0 1 1-1zm0 1.5v3l7 4.5 7-4.5v-3H2z"/>
                    </svg>
                </li>
                <li class="icon linkedin" data-link="https://www.linkedin.com/in/juan-agustin-riondini-2226a6195/">
                    <span class="tooltip">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.225 0h-20.45C.996 0 0 .996 0 2.225v19.55C0 23.004.996 24 2.225 24h20.55C23.004 24 24 23.004 24 22.225v-19.55C24 .996 23.004 0 22.225 0zM7.1 20.452H4.047V9.001h3.053v11.451zm-1.526-13.093c-.974 0-1.664-.662-1.664-1.493 0-.842.7-1.493 1.694-1.493.993 0 1.664.651 1.67 1.493 0 .831-.677 1.493-1.672 1.493zm14.878 13.093h-3.053v-5.579c0-1.35-.025-3.085-1.885-3.085-1.885 0-2.174 1.471-2.174 3.004v5.66h-3.053V9.001h2.93v1.55h.043c.41-.779 1.417-1.597 2.926-1.597 3.132 0 3.709 2.061 3.709 4.742v6.756z"/>
                    </svg>
                </li>
                <li class="icon bugreport" data-link="https://forms.gle/67McXcnE57ZMZUQGA">
                    <span class="tooltip">Bug Report</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C10.9 2 10 2.9 10 4V5C7.79 5 6 6.79 6 9V12C4.34 12 3 13.34 3 15V18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V15C21 13.34 19.66 12 18 12V9C18 6.79 16.21 5 14 5V4C14 2.9 13.1 2 12 2zM12 3.5C12.6 3.5 13 4 13 4.5S12.6 5.5 12 5.5 11 5 11 4.5 11.4 3.5 12 3.5zM6 17H18C18.55 17 19 17.45 19 18V19H5V18C5 17.45 5.45 17 6 17zM7 13H8.5L10 15H8.5L7 13zM10 10H14L15 12H10V10zM16 10H14V12H16V10zM19 12H17L16 10H18L19 12zM12 15C11.45 15 11 15.45 11 16H13C13 15.45 12.55 15 12 15z"/>
                    </svg>
                </li>                                                        
            </ul>
        </div>
    </div>
    <div class="version">
        <div class="compilacion"><span id="release" title="Clase de publicacion"></span><span id="updateVer" title="Numero de version">Error al obtener version</span><span id="release_date" title="Fecha de publicacion"></span><span id="build" title="Compilacion N°"></span></div>
        <a href="./Resources/kernel/subdirs/changelog.html" target="_blank" class="jarsoft" title="Link al historial de cambios">Historial de cambios</a>
    </div>
    

`;