
let velocidad = 1000; // tiempo en milisegundos
const decrementoVelocidad = 100; // hace que el botón se mueva más rápido con el tiempo

function moverBotonSi() {
    const boton = document.getElementById('btnSi');
    const btnWidth = boton.offsetWidth;
    const btnHeight = boton.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    boton.style.position = 'fixed';
    boton.style.left = `${newX}px`;
    boton.style.top = `${newY}px`;

    velocidad = Math.max(100, velocidad - decrementoVelocidad);
}

function iniciarMovimientoSi() {
    moverBotonSi();
    setTimeout(iniciarMovimientoSi, velocidad);
}

document.getElementById('btnNo').addEventListener('click', function() {
    alert('Sabía que dirías que no 😔');
});

window.onload = iniciarMovimientoSi;
