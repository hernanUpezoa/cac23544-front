function getValueById(id) {
    return document.getElementById(id).value;
}

function add() {
    //capoturo el valor del input por su id
    const value = getValueById('elemento');

    //actualizo el tag ul con el valor
    updateValueById('listado', `<li>${value}</li>`);//alt+96
}
function updateValueById(id,value) {
    //actualizar por medio del D.O.M el html
    document.getElementById(id).innerHTML = value;
}

document.getElementById('btnAdd').addEventListener('click',add);
//1 capturo el boton por su id