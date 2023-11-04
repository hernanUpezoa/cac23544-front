/** 
/*Suma de dos numeros y mostrarlo por pantalla*/
/*
function sumarv1() {
    let valor1 = prompt('valor1');
    let valor2 = prompt('valor2');
    let res = Number(valor1) + Number(valor2);
    console.log(res);    
}

function sumar(valor1, valor2) {
    return Number(valor1) + Number(valor2);        
}

function restar(valor1, valor2) {
    return  Number(valor1) - Number(valor2);
}

function dividir(valor1, valor2) {
    let res = 'No se puede dividir por 0';
    if(Number(valor2) !== 0){
        res = Number(valor1) / Number(valor2);
    }
    return res;
}
/*
/*recibe id
returna el valor*/ /*
function getValorId(id){
    return document.getElementById(id).value;
}

function actualizarContenido(id, nuevoContenido){
    document.getElementById(id).innerHTML = nuevoContenido;
}

function calcular(operacion){
    let valor1 = Number(getValorId('valor1'));
    let valor2 = Number(getValorId('valor2'));
    let res = '';
    if(valor1 !== '' && valor2 !== '' ) {
        if(operacion === '+'){
            res = sumar(valor1,valor2);
        } 
        if (operacion === '-'){
            res = restar(valor1,valor2);
        }
        if (operacion === '/'){
            res = dividir(valor1,valor2);
        }        
    }
    actualizarContenido('res',res)
} 
*/

function calcularDescuento() {
    var cantidadTickets = parseFloat(getValorId('cant'));
    var opcionSeleccionada = document.getElementById('descuentos').value;
    var descuento = 0;
  
    if (cantidadTickets > 0) {
      if (opcionSeleccionada === '1') {
        descuento = cantidadTickets * 0.80;
      } else if (opcionSeleccionada === '2') {
        descuento = cantidadTickets * 0.50;
      } else if (opcionSeleccionada === '3') {
        descuento = cantidadTickets * 0.15;
      }
    }
  
    actualizarContenido('resultado', descuento);
  }
  