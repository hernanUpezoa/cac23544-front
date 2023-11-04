/*
    SUMAR DOS NUMEROS Y MOSTARLO POR PANTALLA
*/
//crear una funcion "nuestra propia" no nativa
function sumarv1() {
    let valor1 = prompt('valor1');
    let valor2 = prompt('valor2');
    let res = Number(valor1) + Number(valor2);
    console.log(res);
}
function sumar() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let res = Number(valor1) + Number(valor2);
    //console.log(res);

    //capturo el tag span por su id
    document.getElementById('res').innerHTML = res;
}

function restar() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let res = Number(valor1) - Number(valor2);
    //console.log(res);

    //capturo el tag span por su id
    document.getElementById('res').innerHTML = res;
}
function dividir() {
    let valor1 = Number(getValorById('valor1'));
    let valor2 = Number(getValorById('valor2'));
    debugger
    if(valor2 !== 0) {
        let res = valor1 / valor2;
        //capturo el tag span por su id
        actualizarContenido('res',res);
    }else {
        actualizarContenido('res','No se puede dividir por 0');
    }
}
function actualizarContenido(id, nuevoContenido) {
    document.getElementById(id).innerHTML = nuevoContenido;
}
/*
    Retorna el valor dado su id 
*/
function getValorById(id) {
    //uso el D.O.M para capturar el valor del tag html
    return document.getElementById(id).value;
}
function calcular(operacion) {

}
