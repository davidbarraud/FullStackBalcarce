/*
Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
• Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor

• Escriba un programa que calcule la probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato ingresado por el usuario)

*/
import * as readlineSync from "readline-sync";
console.clear();

console.log(`======= Probabilidad del Dado ========`);
  
      let dados: number = readlineSync.questionInt(`Ingresa la cantidad de dados a usar: `);
      let probabilidad: number = 1;

      // Calcular 6^dados usando un bucle
      for (let i = 0; i < dados; i++) {
          probabilidad = probabilidad * 6;  // Multiplica por 6 en cada iteración
      }
      
     
    console.log(` \n Cantidad de dados: ${dados}. La probabilidad de que todos los dados saquen 6 es: 1/${probabilidad}.`);
    

    
    







