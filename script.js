const $days = document.getElementById('days'),
$hours = document.getElementById('hours');

//Fecha a futuro
const countdownDate = new Date('Aug 19, 2023 21:00:00').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
}, 1000);