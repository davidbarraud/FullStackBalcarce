/*
Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo

*/
import * as readlineSync from "readline-sync";

console.log(`======= Mostrar el numero más grande o mas chico ========`);
console.log(`\n Escoja entre estas 2 opciones para calcular:`);
console.log(`\n 1: Numero mayor:`);
console.log(`\n 2: Numero menor:`);
    
let escoge: number = readlineSync.questionInt(` \n Ingrese el numero que eligio: `);

console.log(` \n********** Calculando **********`);

while (escoge !== 1 && escoge !== 2) {
    escoge = readlineSync.questionInt(`\n Ingrese el numero que eligio: `);
}

////Calcula el mayor
if (escoge == 1){
    let ingreso: number = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
    let mayor: number = ingreso ;
     while (ingreso != 0) {
        
        if (ingreso  >= mayor){
            mayor = ingreso;
        }
        ingreso = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
         
    }
    console.log(` \n El numero mas grande es ${mayor}`);
}

////calcula el menor
if (escoge == 2){
    let ingreso: number = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
    let menor: number = ingreso ;
    while (ingreso !== 0) {
      
       if (ingreso  < menor){
           menor = ingreso;
       }
       ingreso = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
      
   
   }
   console.log(` \n El numero mas chico es ${menor}`);
}






