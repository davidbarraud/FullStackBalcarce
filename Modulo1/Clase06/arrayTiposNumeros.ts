/*
Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay
*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Mostrar tipos de numeros ingresados ========`);
  
const dimension: number =  rls.questionInt(`Ingrese la dimension del arreglo: `);
const numeros : number[] = new Array(dimension);
let positivos : number =0;
let negativos : number =0;
let ceros : number =0;


for (let i = 0; i < dimension ; i++) {
  numeros[i] = rls.questionInt(`Ingrese el numero ${i+1} de ${dimension}: `);
 }

console.log(` \n********** Calculando **********`);

//Recorre el array y suma los arrays.
for (let i = 0; i < dimension ; i++) {
  if (numeros[i] == 0) {
    ceros = ceros + 1;
  } else if (numeros[i] > 0){
    positivos = positivos + 1;
  }else{
    negativos = negativos + 1;
  }
 }

 console.log(` El array ingresado fue: ${numeros}. \n`);
 console.log(` El array tiene: ${ceros} numeros CERO, ${positivos} numeros POSITIVOS y ${negativos} numeros NEGATIVOS. \n`);

 

 

 


  
  


      
     
    
    

    
    







