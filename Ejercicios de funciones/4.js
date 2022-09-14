//Crear una función que reciba por teclado cinco números y luego emitir por pantalla cuantos 
//de ellos son positivos, negativos y cero. 
function cincoNumero(n1,n2,n3,n4,n5){
    let array=[n1,n2,n3,n4,n5];
    let positivos=0
    let negativos=0
    let ceros=0
    for (i=0;i<array.length;i++){
        if (array[i]>0){
            positivos++
        }else if (array[i]<0){
            negativos++
        }else {
            ceros++
        }
    }
    console.log(`Hay ${positivos} numeros positivos, ${negativos} numeros negativos y ${ceros} ceros`)
}
cincoNumero(0,0,20,15,-2);