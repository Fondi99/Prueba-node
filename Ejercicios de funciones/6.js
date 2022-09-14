//Crear una función para ingresar por teclado dos números y luego mostrar por pantalla el 
//mayor de ellos o un cartel “Iguales” sin ambos coinciden
function iguales(n1,n2){
    if (n1>n2){
        console.log(`El mayor es ${n1}`);
    }else if (n1<n2){
        console.log(`El mayor es ${n2}`);
    }else {
        console.log("Son iguales");
    }
}