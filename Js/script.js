// Obtener el modal
var modal = document.getElementById("celebrationModal");

// Obtener el botón de "Sí"
var yesButton = document.getElementById("yesButton");

// Obtener el elemento <span> que cierra el modal
var closeBtn = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón "Sí"
yesButton.onclick = function() {
    modal.style.display = "block";
    startConfetti(); // Llamar a la función para la animación de confeti
}

// Cuando el usuario hace clic en <span> (x), cerrar el modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    stopConfetti(); // Detener la animación de confeti
}

// Cuando el usuario hace clic fuera del modal, cerrar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        stopConfetti(); // Detener la animación
    }
}

// Función para iniciar la animación de confeti
function startConfetti() {
    var confettiSettings = { target: 'confettiCanvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

// Función para detener la animación de confeti
function stopConfetti() {
    var confettiCanvas = document.getElementById("confettiCanvas");
    confettiCanvas.getContext('2d').clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

// Función para redirigir al usuario cuando haga clic en "No"
document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = "confirmacion.html"; // Redirige a la nueva página
});
