const fs = require('fs');

let archivoTareas={
    archivo: 'tareas.json',
    leerArchivo: function(){
        let tareas = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(tareas)
    },
    escribirJSON: function(array){
        fs.writeFileSync('tareas.json', JSON.stringify(array));
    },
    guardarTareas: function(tarea){
        const listaDeTareas=archivoTareas.leerArchivo()
        listaDeTareas.push(tarea)
        archivoTareas.escribirJSON(listaDeTareas)
    },
    filtrarPorEstado: function(estado){
        const listaDeTareas=archivoTareas.leerArchivo()
        const coincideEstado =listaDeTareas.filter(function(item){
            return item.estado==estado
        });
        return coincideEstado
    }
}

module.exports= archivoTareas;