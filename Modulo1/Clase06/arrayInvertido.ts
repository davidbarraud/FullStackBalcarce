/*
Almacene en un arreglo de tamaño N los números ingresados por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Invertir un arreglo ========`);
  
const dimension: number =  rls.questionInt(`Ingrese la dimension del arreglo: `);
const numeros : number[] = new Array(dimension);
const invertido : number[] = new Array(dimension);

for (let i = 0; i < dimension ; i++) {
  numeros[i] = rls.questionInt(`Ingrese el numero ${i+1} de ${dimension}: `);
 }

console.log(` \n********** Calculando **********`);

//Recorre el array y suma los arrays.
for (let i = 0; i < dimension ; i++) {
  invertido[i] = numeros[(dimension-1)-i] ;
 }

 console.log(` El array ingresado fue: ${numeros}. \n`);
 console.log(` El array invertido es: ${invertido}. \n`);

 

 

 


  
  


      
     
    
    

    
    







