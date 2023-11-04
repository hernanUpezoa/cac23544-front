
/*Suma de dos numeros y mostrarlo por pantalla*/

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
    
    document.getElementById('res').innerHTML = res;
}

function restar() {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let res = Number(valor1) - Number(valor2);
    //console.log(res);
    
    document.getElementById('res').innerHTML = res;
}

function dividir() {
    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);
    debugger
    if(valor2 !== 0){
    let res = Number(valor1) / Number(valor2);
    //console.log(res);
    
    document.getElementById('res').innerHTML = res;
    }else{
        document.getElementById('res').innerHTML = 'No se puede dividir por 0';
    }
}