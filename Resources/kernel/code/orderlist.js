function ordenarListas() {
    const listas = document.querySelectorAll('ul.order, ol.order');
    listas.forEach(function(lista) {
        //gestion de las listas en arrays--No modificar array
        const items = Array.from(lista.children);
        items.sort(function(a, b) {
            return a.textContent.localeCompare(b.textContent);
        });
        // Gestion de array en el DOM (Importante---no llamar en window onload)
        items.forEach(function(item) {
            lista.appendChild(item);
        });
    });
}
//ejecutar funccion en dom (--no llamar en window.onload--)
document.addEventListener('DOMContentLoaded', function() {
    ordenarListas();
});
