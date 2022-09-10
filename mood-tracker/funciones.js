const fs = require("fs");

let funciones={
    archivo:"moods.json",
    leerArchivo: function(){
        let moods=fs.readFileSync(this.archivo,'utf-8');
        return JSON.parse(moods);
    },
    escribirJSON: function(array){
        fs.writeFileSync("moods.json",JSON.stringify(array));
    },
    guardarMood: function(mood){
        const listaDeMoods=this.leerArchivo();
        listaDeMoods.push(mood);
        this.escribirJSON(listaDeMoods);
    }
}

module.exports=funciones;