/*
Calculadora

*/
import * as readlineSync from "readline-sync";
console.clear();

console.log(`======= Calculadora ========`);
  
let numero1: number = readlineSync.questionInt(`Ingrese el primer numero: `);
let numero2: number = readlineSync.questionInt(`Ingrese el segundo numero: `);
let opcionMenu: number = readlineSync.questionInt(`Ingrese 1 para sumar, 2 para restar y cualquier tecla para salir: `);


//Scope (ambito) global
function graficaLinea(mensaje : string, simbolo: string ="-", cantidad: number){
  let linea : string = simbolo;
  for (let i = 0; i < cantidad; i++) {
  linea = linea + simbolo ;
  }
  console.log(linea);
  console.log(mensaje);
  console.log(linea);
}


switch (opcionMenu) {
  case 1:
      graficaLinea(` \n El resultado de la suma es: ${numero1 + numero2}.`, "*", 30);      
  break;
    
  case 2:
      graficaLinea(` \n El resultado de la suma es: ${numero1 - numero2}.`, "+" ,40);   
  break;

  default:
    graficaLinea(` \n Saliendo del Programa.`, "#", 35); 
    break;
}


      
     
    
    

    
    







