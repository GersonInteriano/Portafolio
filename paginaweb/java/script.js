function toggleInfo(button) {
    const info = button.nextElementSibling; // El div con clase .info-adicional

    // Verificar si la información está visible
    if (info.style.maxHeight) {
        // Ocultar: Reiniciar la altura y cambiar texto del botón
        info.style.maxHeight = null;
        button.textContent = "Más";
    } else {
        // Mostrar: Establecer la altura al contenido total y cambiar texto del botón
        info.style.maxHeight = info.scrollHeight + "px";
        button.textContent = "Menos";
    }
}