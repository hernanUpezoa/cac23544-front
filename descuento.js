/*const precio = 200;
const descuento = 0;

function elegirDescuento() {
    switch('value'){
        case '1':
            descuento = 0.80
            calcularDescuento();
            break;
        case '2':
            descuento = 0.50
            calcularDescuento();
            break;
        case '3':
            descuento = 0.20
            calcularDescuento();
            break;
    }
  }

  function calcularDescuento(){
    total = precio * getValorId('cant') * descuento; //precio(200) * input cantidad * descuento que depende de la opcion
  }


function getValorId(id){
    return document.getElementById(id).value;
}
*/



const precio = 200;
let descuento = 0; // Utiliza 'let' en lugar de 'const' para que puedas cambiar el valor
const cantidad = parseFloat(getValorId('cant')); // Obtener la cantidad del campo de entrada

function elegirDescuento() {
    const opcionSeleccionada = document.getElementById('descuentos').value;

    switch (opcionSeleccionada) {
        case '1':
            descuento = 0.80;
            break;
        case '2':
            descuento = 0.50;
            break;
        case '3':
            descuento = 0.20;
            break;
        default:
            descuento = 0; // Si la opción no coincide, no hay descuento
    }

    calcularDescuento();
}

function calcularDescuento() {
    const cantidad = parseFloat(getValorId('cant'));
    const total = precio * cantidad * descuento;
    actualizarContenido('resultado', total);
}

function getValorId(id) {
    return document.getElementById(id).value;
}

function actualizarContenido(id, nuevoContenido) {
    document.getElementById(id).innerHTML = nuevoContenido;
}
