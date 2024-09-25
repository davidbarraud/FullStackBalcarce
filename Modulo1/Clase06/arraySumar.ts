/*
Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario
*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Sumar 2 arreglos de dimension 6 ========`);
  
const v1 : number[] = new Array(6);
const v2 : number[] = new Array(6);
const vSuma : number[] = new Array(6);
const dimension: number = 6;
let mayor: number = 0;

function crearArray(arr: number[], num:number){
  console.log(`\n Ingrese los numeros del array ${num}`); 
for (let i = 0; i < dimension ; i++) {
  arr[i] = rls.questionInt(`Ingrese el numero ${i+1} de ${dimension}: `);
 }
}

crearArray(v1,1);
crearArray(v2,2);

console.log(` \n********** Calculando **********`);

//Recorre el array y suma los arrays.
for (let i = 0; i < dimension ; i++) {
  vSuma[i] = v1[i] + v2[i];
 }

 console.log(` El array numero 1 es: ${v1}. \n`);
 console.log(` El array numero 2 es: ${v2}. \n`);
 console.log(` La suma de los 2 arrays es: ${vSuma}. \n`);
 

 

 


  
  


      
     
    
    

    
    







