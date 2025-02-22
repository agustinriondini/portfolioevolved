
// Esta funcion es de orden exclusivo de los juegos en la estanteria.
function ordenarProyectos() {
    const container = document.querySelector(".gamesContainer");
    const gameBoxes = Array.from(container.getElementsByClassName("gameBox")); 
        gameBoxes.sort((a, b) => {
            const titleA = a.querySelector(".projectOnLibraryTitle").textContent.trim().toLowerCase();
            const titleB = b.querySelector(".projectOnLibraryTitle").textContent.trim().toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });

        //  Limpiar gameboxex para reinsertar la lista ordenada.
        container.innerHTML = "";
        gameBoxes.forEach(gameBox => {
            container.appendChild(gameBox);
        });
    }
    window.onload = ordenarProyectos;
