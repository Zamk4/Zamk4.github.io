const horaApertura = 10;
const horaCierre = 20;

const fechaActual = new Date();
const horaActual = fechaActual.getHours();

const letrero = document.getElementById('letrero-horario');
const texto = document.getElementById('mensaje-texto');

if (horaActual >= horaApertura && horaActual < horaCierre) {
    texto.textContent = "¡ABIERTO! Ven por tu helado.";
    letrero.classList.add('abierto');
} else {
    texto.textContent = "CERRADO. Volvemos a las " + horaApertura + ":00. am";
    letrero.classList.add('cerrado');
}