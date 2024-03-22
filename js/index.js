let resultado = document.getElementById('Resultado');

function asignar(valor){
    resultado.value += valor;
    //resultado.value = resultado.value + valor;
}

// funcion arrow
let calcular = () => {
    resultado.value = eval(resultado.value);
}

function calcularX(){
    resultado.value = eval(resultado.value);

}la

function borrar(){
    resultado.value = "";
}

function Potencia(){
    resultado.value = eval(resultado.value * resultado.value);
}

function Raiz(){
    resultado.value = Math.sqrt(resultado.value);
}

function Seno(){
    resultado.value = Math.sin(resultado.value);
}

function Coseno(){
    resultado.value = Math.cos(resultado.value);
}

function BorrarUno(){
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
}

function pi (){
    resultado.value = Math.PI;
}

function e(){
    resultado.value = Math.E;
}

function Logaritmo(){
    resultado.value = Math.log(resultado.value);
}

function Recall(){
    resultado.value = eval(resultado.value * resultado.value);
}