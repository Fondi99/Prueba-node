const fs = require ("fs");
const funciones = require('./funciones');
const inputTerminal=process.argv;
const comando = inputTerminal[2];

switch(comando){
    case "today":
        let miFecha= new Date(); 
        let fecha=`${miFecha.getDay()}/${miFecha.getMonth()}/${miFecha.getFullYear()}`  
        console.log(fecha)
        let newMood={
                "Date": fecha,
                "Mood": inputTerminal[3]
            };
        funciones.guardarMood(newMood);
        console.log("Mood Cargado");
        console.log("---------------");
        console.log(`${newMood.Mood} -> ${newMood.Date}`);
        break;
    case "list":
        console.log("Moods");
        console.log("--------");
        moods=funciones.leerArchivo();
        moods.forEach(mostrarLista);
        function mostrarLista(item){
            console.log(`${item.Date} -> ${item.Mood}`)
        };
        break;
    case undefined:
        console.log("Tenes que pasar una accion");
        break;
    default:
        console.log("No entiendo que quieres hacer");
        break;

}