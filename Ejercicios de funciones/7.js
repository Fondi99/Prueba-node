//Crear una función que permita ingresar por teclado cuatro números distintos y luego mostrar 
//por pantalla el mayor y el segundo mayor de ellos
function mayorYSegundoMayor(n1,n2,n3,n4){
    let array =[n1,n2,n3,n4];
    array.sort(function(a,b){
        return a - b;
    });
    console.log(`El mayor es ${array[3]} y el segundo mayor es ${array[2]}`);
}