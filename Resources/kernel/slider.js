document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.projectContainer');
    let currentProjectIndex = 0;
    let isDarkened = false; // Variable para rastrear el estado de oscurecimiento

    // Oculta todos los proyectos excepto el primero al cargar la página
    projects.forEach((project, index) => {
        if (index !== currentProjectIndex) {
            project.classList.add('hidden');
        }
    });

    function showNextProject() {
        projects[currentProjectIndex].classList.add('hidden');
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        projects[currentProjectIndex].classList.remove('hidden');
    }

    function toggleDarkenProjectContainer() {
        const projectContainer = projects[currentProjectIndex];
        isDarkened = !isDarkened;
        
        if (isDarkened) {
            projectContainer.classList.add('darken');
        } else {
            projectContainer.classList.remove('darken');
        }
    }

    const powerBtn = document.getElementById('powerbtn');
    powerBtn.addEventListener('click', toggleDarkenProjectContainer);

    projects.forEach((project) => {
        project.addEventListener('click', showNextProject);
    });

    window.showNextProject = showNextProject;
});
