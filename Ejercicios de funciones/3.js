//Hacer una función que reciba 3 números, calcular el promedio y luego emitir por pantalla un 
//cartel que indique si el mismo es positivo, negativo o cero.
function promedio(n1,n2,n3){
    let promedio = (n1+n2+n3)/3
    console.log (promedio);
    if (promedio>0){
        console.log("El promedio es positivo");
    }else if (promedio<0){
        console.log("El promedio es negativo");
    }else {
        console.log("El promedio es cero");
    }
}