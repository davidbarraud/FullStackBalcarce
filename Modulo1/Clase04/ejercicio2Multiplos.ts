/*
Cree un algoritmo que visualice los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
• Tener en cuenta que hay números que son múltiplos de 2 y de 3 al mismo tiempo
• En dichos casos, solamente indique el número una vez

*/
import * as readlineSync from "readline-sync";
console.clear();
console.log(`======= Numeros multiplos  ========`);
let num1: number = readlineSync.questionInt(`Ingrese el numero inicial a calcular: `);
let num2: number = readlineSync.questionInt(`Ingrese el numero final a calcular: `);


console.log(` \n********** Calculando **********`);
for (let i = num1; i <= num2 ; i++) {
     if (i % 2 === 0 && i % 3 ===0) {
        console.log(` El numero ${i} es multiplo de 2 y de 3`);        
    } else if (i % 2 === 0){
        console.log(` El numero ${i} es multiplo de 2 `); 
    } else if (i % 3 === 0){
        console.log(` El numero ${i} es multiplo de 3 `); 
    }
    
    
}







