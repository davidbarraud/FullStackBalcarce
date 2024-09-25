/*
Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar dicho valor

*/
import * as readlineSync from "readline-sync";
console.clear();
console.log(`======= Tablas de Multiplicacion  ========`);
let tabla: number = readlineSync.questionInt(`Ingrese la tabla del numero a multiplicar: `);
let final: number = readlineSync.questionInt(`Ingrese hasta que numero quiere multiplicar: `);


console.log(` \n********** Calculando **********`);
console.log(`\n ===== Tabla del numero: ${tabla} =========`);

for (let i = 0; i <= final ; i++) {
      console.log(` - ${tabla} x ${i} = ${tabla * i}`);

    
}








