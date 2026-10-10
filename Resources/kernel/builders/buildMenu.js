export const buildMenu = `
    <button class="menuButtonContainer" id="toggleMenu" title="Menú de Navegación" aria-label="Abrir Menú">
        <svg class="svg-icon svg-menu-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    </button>
    <div class="navContainer" id="navContainer">
        <nav>
            <ul>
                <li><a href="#proyectos" data-section="proyectos" class="navLink">Proyectos</a></li>
                <li><a href="#formacion" data-section="formacion" class="navLink">Formación</a></li>
                <li><a href="#skills" data-section="skills" class="navLink">Habilidades</a></li>
            </ul>
        </nav>
    </div>
`;