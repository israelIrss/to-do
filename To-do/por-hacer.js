const fs = require('fs');

let listadoPorHacer = [];
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            rejects(err);
    });
}
const cargardb = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargardb();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargardb();
    return listadoPorHacer;
}
const actualizar = (descripcion, completado) => {
    cargardb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index => 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    cargardb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index != -1) {

        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }


}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}