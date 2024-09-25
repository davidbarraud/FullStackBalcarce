/*
Diseñar un algoritmo que lea números enteros hasta teclear 0
• Determinar y mostrar el máximo, el mínimo y la
media de todos los números ingresados
• Pensar cuidadosamente cómo debemos inicializar las variables

*/
import * as readlineSync from "readline-sync";
console.clear();

console.log(`======= Maximos, Minimos y Media ========`);
  
    let suma: number = 0 ;
    let totales: number = 0 ;
    let media: number;

    let ingreso: number = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
    let mayor: number = ingreso ;
    let menor: number = ingreso ;
     while (ingreso != 0) {
        
        if (ingreso  > mayor){
            mayor = ingreso;
            
        }
        if (ingreso  < menor){
            menor = ingreso;
            
        }
        //else {
          //  menor = ingreso;
        //}
        suma = suma + ingreso;
        totales++;
        ingreso = readlineSync.questionInt(`Ingrese un numero. Para salir ingrese 0---: `);
         
    }
    console.log(` \n********** Calculando **********`);

    if (totales == 0 ){
        console.log(` \n Bye, Bye.`); 
    }else {
        console.log(` \n Se ingresaron ${totales} numeros.`);
        console.log(` \n El numero mas grande es: ${mayor}.`);
        console.log(` \n El numero mas chico es: ${menor}.`);

        media = suma / totales
        console.log(` \n  La media es: ${media.toFixed(2)}`);
    }
    







