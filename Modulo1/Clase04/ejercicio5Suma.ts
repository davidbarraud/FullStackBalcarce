/*
Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27

*/
import * as readlineSync from "readline-sync";
console.clear();
console.log(`======= Suma de Numeros  ========`);
let num1: number = readlineSync.questionInt(`Ingrese el numero inicial a calcular: `);
let num2: number = readlineSync.questionInt(`Ingrese el numero final a calcular: `);
let suma: number = 0;


console.log(` \n********** Calculando **********`);

if (num1 > num2 ){
      for (let i = num1; i >= num2 ; i--) {
            suma = suma + i;  
      }   

} else{

for (let i = num1; i <= num2 ; i++) {
      suma = suma + i;  
    
}
}
console.log(`\n La suma de todos los números comprendidos entre ${num1} y ${num2} es: ${suma}.`);







