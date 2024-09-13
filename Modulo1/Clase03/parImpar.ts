/*
Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
En el caso de ser 0 (cero) el algoritmo deberá  informarlo 

*/
import * as readlineSync from "readline-sync";

console.log(`======= Calcular si el numero es par o impar ========`);
let numero: number = readlineSync.questionInt(`Ingrese un numero: `);

console.log(` \n********** Calculando **********`);


if (numero == 0  ) {
    console.log(`\n El numero ingresado es un cero.`);
} else if (numero % 2 == 0){
    console.log(`\n El numero ingresado es par.`);
} else {
    console.log(`\n El numero ingresado es impar.`);
}


