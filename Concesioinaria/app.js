const autos= require('./autos');

const concesionaria = {
    buscarAutos: function(patente){
        autos.forEach(function(item,index){
            if (item.patente==patente){
                console.log( autos[index])
            }else{
                return null
            }
        })
    },
    venderAutos: function(){
        let autoAVender = concesionaria.buscarAutos()
        autoAVender.vendido=true
    },
    autos: autos
};

console.log(concesionaria.buscarAutos('APL123'))