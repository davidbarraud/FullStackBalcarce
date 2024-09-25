/*
Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior

*/
import * as rls from "readline-sync";
//import  esMultiplo  from "./ejer2Multiplos";
console.clear();

console.log(`======= Cantidad de divisores de un numero ========`);
  
let numero1: number = rls.questionInt(`Ingrese el numero a calcular: `);
let resultado: boolean;
let acumulador: number = 0;
let divisores: string ="";


function esMultiplo(numero1 : number, numero2: number): boolean{
  let multiplo : boolean;
  multiplo = numero1 % numero2 === 0;
 return multiplo;
}

for (let i = 0; i <= numero1; i++) {
  resultado = esMultiplo(numero1, i)
  if (resultado === true) {
    //acumulador++;
    divisores = divisores + i+", ";
    
  }
  
}
function cantidadDeDivisores(numero1 : number): number{
  let respuesta : number=0;
  let multiplo : boolean;
  for (let i = 0; i <= numero1; i++) {
    multiplo = esMultiplo(numero1, i)
    if (multiplo === true) {
      respuesta++;
    }
}
return respuesta;
}

acumulador = cantidadDeDivisores(numero1);
console.log(`El numero ${numero1} tiene ${acumulador} divisores, y ellos son: ${divisores}`);
  


      
     
    
    

    
    







