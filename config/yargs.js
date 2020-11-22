const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },

}
const argv = require('yargs')
    .command('crear', ' crea una tarea', opts)
    .command('actualizar', 'Actualiza una tarea', {


        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {

            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }



    })
    .command('borrar', ' Elimina una tarea ', opts)
    .help()
    .argv;
module.exports = {
    argv
}