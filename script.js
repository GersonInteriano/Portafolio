<script>
   function toggleInfo(element) {
    // Obtener el contenedor de información adicional (div) correspondiente
    const info = element.parentElement.nextElementSibling;

    // Verificar si la información está actualmente visible
    if (info.style.display === "block") {
        // Si está visible, ocultarlo
        info.style.display = "none";
        element.textContent = "Más";  // Cambiar el texto de "Más" a "Más"
    } else {
        // Si no está visible, mostrarlo
        info.style.display = "block";
        element.textContent = "Menos";  // Cambiar el texto de "Más" a "Menos"
    }
}

</script>
