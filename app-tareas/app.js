const fs = require ("fs");
//importo la funcion del modulo funcionesDeTareas
const archivo= require ('./funcionesDeTareas');
//asigno el metodo process.argv a la variable inputTerminal
const inputTerminal = process.argv;
//inputTerminal me va a dar un array y yo quiero el tercer valor para empezar a operar
const comando = inputTerminal[2];
let arrayTareas= archivo.leerArchivo();

switch(comando){
    case "listar":
        console.log("Listado de tareas");
        console.log("--------------------");
        arrayTareas.forEach(mostrarLista);
        function mostrarLista(item,index){
            console.log(`${index+1}. ${item.titulo} - ${item.estado}`)
        }
        break;
    case undefined:
        console.log("Tienes que pasar una accion")
        break;
    case "crear":
        let nuevoObjeto={
            "titulo": inputTerminal[3],
            "estado": "pendiente"
        }
        archivo.guardarTareas(nuevoObjeto)
        console.log("Nueva tarea creada");
        console.log("--------------------");
        console.log(`${nuevoObjeto.titulo} -> ${nuevoObjeto.estado}`)
        break;
    case "filtrar":
        let estado=inputTerminal[3];
        let resultado = archivo.filtrarPorEstado(estado);
        console.log(`Tareas ${estado}`);
        console.log("--------------------");
        resultado.forEach(function mostrarLista(item,index){
            console.log(`${index+1}. ${item.titulo} - ${item.estado}`)
        });
        break;
    default:
        console.log("No entiendo que quieres hacer")
        break;
}