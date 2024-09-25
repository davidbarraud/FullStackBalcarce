/*
Encontrar el elemento mas grande del arreglo
Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cual es el número más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el
número es par o impar
*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Verificar cual es el numero más grande de un Arreglo ========`);
  
const numeros : number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let dimension: number = numeros.length;
let mayor: number = 0;

console.log(` \n********** Calculando **********`);

//Función que recorre e imprime el arreglo.
function esPar(num : number){
  if (num % 2 ==0) {
    console.log(` El numero ${num} es par`);
  } else{
    console.log(` El numero ${num} es impar`);
  }
}

//Recorre el array y verifica si el nombre ingresado está dentro del mismo.
for (let i = 0; i < dimension ; i++) {
  if (numeros[i] >= mayor) {
   mayor = numeros[i];
   } 
 }

 console.log(` El numero mas grande es: ${mayor}. \n`);
 esPar(mayor);

 

 


  
  


      
     
    
    

    
    







