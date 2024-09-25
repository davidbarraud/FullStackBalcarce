/*
Calculadora

*/
import * as readlineSync from "readline-sync";
console.clear();

console.log(`======= Calculadora ========`);
  
let i : number;
let linea : string;

let numero1: number = readlineSync.questionInt(`Ingrese el primer numero: `);
let numero2: number = readlineSync.questionInt(`Ingrese el segundo numero: `);
let opcionMenu: number = readlineSync.questionInt(`Ingrese 1 para sumar, 2 para restar y cualquier tecla para salir: `);

switch (opcionMenu) {
  case 1:
      linea = "-";
      for (i = 0; i < 40; i++) {
        linea = linea + "-" ;
        
      }
      console.log(linea);
      console.log(` \n El resultado de la suma es : ${numero1 + numero2}.`);
      console.log(linea);
    
    break;
    case 2:
        linea = "-";
        for (i = 0; i < 40; i++) {
          linea = linea + "-" ;
          
        }
        console.log(linea);
        console.log(` \n El resultado de la resta es : ${numero1 - numero2}.`);
        console.log(linea);
    break;


  default:
    console.log(` \n Saliendo del programa.`);
    break;
}


      
     
    
    

    
    







