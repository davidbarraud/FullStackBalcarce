/*
Construya un algoritmo que tenga un arreglo de dimensión deseada por el usuario y llénelo con los nombres que el usuario desee

Crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres de personas


*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Arreglo de nombres ========`);
  
let dimension: number = rls.questionInt(`Ingrese la dimension del arreglo: `);
const nombres : string[] = new Array(dimension);


for (let i = 0; i < dimension ; i++) {
  nombres[i] = rls.question(`Ingrese el nombre ${i+1} de ${dimension}: `);
 }

 console.log(` \n********** Calculando **********`);
 for (let i = 0; i < dimension ; i++) {
  //console.log(`La Potencia con base ${base} y exponente ${exponente} es: ${resultado}`);
  console.log(` El nombre ${i+1} ingresado es: ${nombres[i]}`);
 
 }


  
  


      
     
    
    

    
    







