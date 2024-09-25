/*
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 


*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Clacular la potencia ========`);
  
let base: number = rls.questionInt(`Ingrese la base: `);
let exponente: number = rls.questionInt(`Ingrese el exponente: `);
let resultado: number;


function calcularPotencia(base : number, exponente: number): number{
  
  return base ** exponente;

}

/* Funcion que grafica un color en la consola,
el 31 es rojo, el 32 es verd, el 33 es amarillo */

function logColor(text: string, colorCode: number) {
  console.log(`\x1b[${colorCode}m%s\x1b[0m`, text);
}

if (exponente >= 0) {
 resultado = calcularPotencia(base, exponente);
  console.log(`La Potencia con base ${base} y exponente ${exponente} es: ${resultado}`);
  
} else{
  logColor(` \n ERROR-----El exponente debe ser un valor mayor o igual a cero`, 31);
  
}


      
     
    
    

    
    







