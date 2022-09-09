const autos=require('./autos')
let concesionaria = {
   autos:autos,
   buscarAuto: function(patente){
      const auto= autos.find(auto=>auto.patente==patente)
      if (auto==undefined){
         return null
      }else{
         return auto
      }
   },
   venderAuto: function(patente){
      let autoAVender = this.buscarAuto(patente);
      autoAVender.vendido=true
   },
   autosParaLaVenta: function(){
      return autos.filter(function(auto){
         return auto.vendido==false
      })
   },
   autosNuevos: function(){
      return this.autosParaLaVenta().filter(function(auto){
         return auto.km<100
      })
   },
   listaDeVentas: function(){
      let lista=[]
      let autosVendidos= autos.filter(function(auto){
         return auto.vendido==true
      })
      autosVendidos.forEach(function(auto){
         lista.push(auto.precio)
      })
      return lista
   },
   totalDeVentas: function(){
      let lista= this.listaDeVentas()
      if(lista.length==0){
        return 0
      }else{
        return lista.reduce(function(acum,num){
            return acum+num
         })
      }
   },
   puedeComprar: function(auto,persona){
    return persona.capacidadDePagoTotal>auto.precio&&persona.capacidadDePagoEnCuotas>(auto.precio/auto.cuotas)
   },
   autosQuePuedeComprar: function(persona){
    let autos=this.autosParaLaVenta()
    let autosDeCompra=[]
    autos.forEach(function(auto){
        if (concesionaria.puedeComprar(auto,persona)==true){
            autosDeCompra.push(auto)
        }
    })
    return autosDeCompra
   }
}