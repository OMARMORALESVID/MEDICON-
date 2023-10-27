document.addEventListener('DOMContentLoaded', function () {
    const rotatingSpan = document.getElementById('rotating-span');
    const rotatingTexts = ['📦 Envios a Nivel Nacional', '✩✩✩✩✩ Confiabilidad', '🤝 Compromiso '];
    let currentIndex = 0;

    function rotateText() {
        rotatingSpan.textContent = rotatingTexts[currentIndex];
        currentIndex = (currentIndex + 1) % rotatingTexts.length;
    }

    rotateText(); // Mostrar el primer texto
    setInterval(rotateText, 3500); // Cambiar el texto cada 1.5 segundos

    // Reducir el tamaño de letra del texto rotativo
    rotatingSpan.style.fontSize = '20px'; // Ajusta el tamaño de fuente según tus preferencias
});

