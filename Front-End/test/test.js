// ~ Seleccionamos el contenedor del carrusel
const carrusel = document.querySelector(".carrucel");

// ~ Seleccionamos los botones por orden
const btnAdelante = document.querySelector("button:nth-of-type(1)");
const btnAtras = document.querySelector("button:nth-of-type(2)");

// Todo - Evento click en el botón "adelante"
// Desplaza el scroll horizontal hacia la derecha 200px
btnAdelante.addEventListener("click", () => {
    carrusel.scrollBy({
        left: 200, // número de píxeles a mover
        behavior: "smooth" // animación suave
    });
});

// Todo - Evento click en el botón "atrás"
// Desplaza el scroll horizontal hacia la izquierda 200px
btnAtras.addEventListener("click", () => {
    carrusel.scrollBy({
        left: -200,
        behavior: "smooth"
    });
});
