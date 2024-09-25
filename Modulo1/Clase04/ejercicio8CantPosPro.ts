/*
Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total

*/
import * as readlineSync from "readline-sync";
console.clear();

console.log(`======= Positivos y Negativos ========`);
  
    let contador: number = 0 ;
    let totales: number = 0 ;
    let porcentaje: number;

    let ingreso: number = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
     while (ingreso != 0) {
        
        if (ingreso  > 0){
            contador ++;
        }
        totales++;
        ingreso = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
         
    }
    console.log(` \n********** Calculando **********`);

    if (totales == 0 ){
        console.log(` \n Bye, Bye.`); 
    }else {
    console.log(` \n Se ingresaron ${totales} numeros.`);
    porcentaje = (contador * 100 )/ totales
    console.log(` \n  La cantidad de numeros positivos son ${contador} y el porcentaje es: ${porcentaje.toFixed(2)}%`);
    }
    







