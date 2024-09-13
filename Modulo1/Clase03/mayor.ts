/*
Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
*/
import * as readlineSync from "readline-sync";

console.log(`======= Calcular que numero es el mayor ========`);
let num1: number = readlineSync.questionInt(`Ingrese el primer numero: `);
let num2: number = readlineSync.questionInt(`Ingrese el segundo numero: `);
let num3: number = readlineSync.questionInt(`Ingrese el tercer numero: `);


console.log(` \n********** Calculando **********`);

let mayor: number = 0;

 if (num1 > num2){
    mayor = num1;
} else {
    mayor = num2;
}
if (num3 > mayor){
    console.log(`\n El numero mas grande es:  ${num3}.`);
} else {
    console.log(`\n El numero mas grande es:  ${mayor}.`);
}

