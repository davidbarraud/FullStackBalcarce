/*
Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje
indicándonos que hemos agotado todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa

*/
import * as readlineSync from "readline-sync";
console.clear();
console.log(`======= Tres intentos para ingresar la clave ========`);
const claveGuardada: string = "eureka";
let clave: string = "";
let n : number = 0;


console.log(` \n********** Calculando **********`);

while (clave !== claveGuardada && n !== 3) {
    clave = readlineSync.question(`Intento ${n+1} de 3. Ingrese una clave para ver si es la correcta: `).toLowerCase();
    n++;
    
}
if(clave == claveGuardada){
    console.log(`\n Encontraste la clave, saliendo del programa...`);
    
}else {
    console.log(`\n Tres intentos fallidos de login. Saliendo del programa...`);
}






