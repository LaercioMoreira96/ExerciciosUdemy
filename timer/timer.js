function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('#timerDisplay');
const iniciar = document.querySelector('#startButton');
const pausar = document.querySelector('#pauseButton');
const zerar = document.querySelector('#resetButton');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}




iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    iniciaRelogio();
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
})

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0
})

console.log(function() {
    setInterval(1000)}
)