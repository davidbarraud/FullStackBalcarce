/*
Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
En el caso de ser 0 (cero) el algoritmo deberá  informarlo 

*/
import * as readlineSync from "readline-sync";

console.log(`======= Calcular el promedio de notas ========`);
let cantNotas: number = readlineSync.questionInt(`Ingrese la cantidad notas que se van a calcular: `);
let acumulador: number = 0;
let promedio : number;

console.log(` \n********** Calculando **********`);

for(var i=1; i<=cantNotas;i++){
    let nota: number = parseFloat(readlineSync.question(`Ingrese la nota numero ${i}: `));
    acumulador = acumulador + nota;

}
promedio = acumulador/cantNotas;
console.log(`\n El promedio total de las notas es: ${promedio.toFixed(2)}`);







