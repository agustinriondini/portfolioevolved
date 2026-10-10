function ordenarListas() {
    const listas = document.querySelectorAll('ul.order, ol.order');
    listas.forEach(function(lista) {

        const items = Array.from(lista.children);
        items.sort(function(a, b) {
            return a.textContent.localeCompare(b.textContent);
        });

        items.forEach(function(item) {
            lista.appendChild(item);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    ordenarListas();
});
