/*
Realizar un algoritmo que dado un número entero ingresado por el usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un
número mayor que cero)

*/
import * as readlineSync from "readline-sync";
console.clear();
console.log(`======= Calcular si el numero es par o impar ========`);
let numero: number = 1;
let bandera: number = -1;
console.log(` \n********** Calculando **********`);

while (numero !== bandera) {
    numero = readlineSync.questionInt(`Ingrese un numero entero para saber si es par o impar. Para finalizar escriba -1: `);
    if (numero == 0 ){
        numero = readlineSync.questionInt(`Ingrese otro numero que no sea el cero:  `); 
        if (numero % 2 === 0){
            console.log(`\n El numero ingresado: ${numero} es par.`);
         } else {
            console.log(`\n El numero ingresado: ${numero} es impar.`);
         }    
    
    } else if (numero % 2 === 0){
            console.log(`\n El numero ingresado: ${numero} es par.`);
    } else {
            console.log(`\n El numero ingresado: ${numero} es impar.`);
    }    
}
console.log(`\n Bye, Bye.`);

