const listado = []; //crear array vacio
function add(){
    //capturo el valor del input por su id
    const value = getValueById('elemento');

    //agregamos si la lista aun no tiene 5 elemenots
    if(value === '')
        return;
    if(listado.length < 5){
        listado.push(`<li>${value}</li>`);
        updateValueByid('total', (5-listado.length))


    //actualiza el tag ul (listado) con el valor
    updateValueByid('listado', `<li>${value}</li>`);
    }

    let items ='';
    for(let valor of listado){
        items += valor;
    }
    
    updateValueByid('listado',valor);
}

function getValueById(id){
    //capturo el boton por su id
    return document.getElementById(id).value;
}

function updateValueByid(id, value){
    //actualizar por medio del DOM el HTML
    document.getElementById(id).innerHTML = value;
}



document.getElementById('btnAdd').addEventListener('click', add);
//evento click