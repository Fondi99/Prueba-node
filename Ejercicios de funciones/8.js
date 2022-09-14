function mayorYSegundoMayor(n1,n2,n3,n4){
    let array =[n1,n2,n3,n4];
    console.log(array)
    let nuevoArray = array.sort(function(a,b){
        return a - b;
    });
    console.log(array)
    console.log(`El mayor es ${nuevoArray[3]} y el segundo mayor es ${nuevoArray[2]}`);
    let mayor=nuevoArray[3];
    let segundoMayor=nuevoArray[2];
    console.log(`Y el estan en las posiciones ${array.indexOf(mayor)+1} y ${array.indexOf(segundoMayor)+1} respectivamente`)
    console.log(mayor, segundoMayor)
}
mayorYSegundoMayor(40,30,20,10)