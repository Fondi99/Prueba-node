//Crear una función que reciba por teclado un número y luego indicar con un cartel aclaratorio 
//si el mismo es múltiplo de 3. 
function multiploDeTres(n){
    if (n%3==0){
        console.log(`El numero ${n} es multiplo de 3`);
    }else {
        console.log(`El numero ${n} no es multiplo de 3`);
    }
}