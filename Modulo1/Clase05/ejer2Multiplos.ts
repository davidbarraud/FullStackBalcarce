/*
Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero

*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Clacular si el primer numero ingreso es multiplo del segundo ========`);
  
let numero1: number = rls.questionInt(`Ingrese el primer numero: `);
let numero2: number = rls.questionInt(`Ingrese el segundo numpero: `);
let resultado: boolean;

function esMultiplo(num1 : number, num2: number): boolean{
  let multiplo : boolean;
  multiplo = num1 % num2 === 0;
 return multiplo;
}

resultado= esMultiplo(numero1, numero2);
console.log(`El numero ${numero1} es multiplo del numero ${numero2}?: ${resultado ? 'verdadero' : 'falso'}`);
  


      
     
    
    

    
    







