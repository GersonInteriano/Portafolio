document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar");

    // Variable para rastrear la posición anterior al desplazarse
    let previousScrollPosition = window.pageYOffset;

    // Ocultar o mostrar el menú al desplazarse
    window.addEventListener("scroll", function () {
        const currentScrollPosition = window.pageYOffset;

        if (previousScrollPosition > currentScrollPosition) {
            // Desplazamiento hacia arriba - mostrar el menú
            nav.style.top = "0";
        } else {
            // Desplazamiento hacia abajo - ocultar el menú
            nav.style.top = "-100px"; // Ajusta según la altura del menú
        }

        // Actualiza la posición anterior
        previousScrollPosition = currentScrollPosition;
    });

    // Añadir clase 'active' al menú con un efecto al cargar la página
    setTimeout(() => {
        nav.classList.add("active");
    }, 500); // Ajusta el retraso según lo que necesites
});
