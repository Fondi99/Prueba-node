const fs = require("fs");
const XLSX = require("xlsx");


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
    },
    convertJsonToExcel: function(){
        let JSONParse=this.leerArchivo();
        const workSheet=XLSX.utils.json_to_sheet(JSONParse);
        const workBook=XLSX.utils.book_new();
    
        XLSX.utils.book_append_sheet(workBook,workSheet,"Moods");
    
        XLSX.write(workBook,{bookType:'xlsx',type:"buffer"});
    
    XLSX.write(workBook,{bookType:'xlsx',type:"binary"});
    
    XLSX.writeFile(workBook,"Moods.xlsx");
    }
}

module.exports=funciones;