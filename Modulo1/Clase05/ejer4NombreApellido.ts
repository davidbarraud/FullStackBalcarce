/*
Implemente un método llamado imprimirNombre que reciba un nombre y un apellido y devuelva los dos datos concatenados en una variable de tipo string. 
El string devuelto debe imprimirse por consola.

Refactorizar el método dibujarGuiones utilizado para el ejercicio de la calculadora realizado anteriormente 

*/
import * as readlineSync from "readline-sync";
console.clear();

console.log(`======= Nombre y Apellido ========`);
  
let nombre :  string = readlineSync.question(`Ingrese el nombre: `);
let apellido: string = readlineSync.question(`Ingrese el apellido: `);
let simbolo: string = readlineSync.question(`Ingrese un simbolo para graficar: `);

//Funcion que grafica el simbolo que elije el usuario
function dibujarGuiones(simbolo: string ="-") :string {
  let linea : string = simbolo;
  for (let i = 0; i < 40; i++) {
  linea = linea + simbolo ;
  }
  return linea;
}

//Funcion que imprime el nombre, el apellido y el simbolo ingresados
function imprimirNombre(nombre: string, apellido :string) {
  console.log("\n"+dibujarGuiones(simbolo));
  console.log(`Usted ingreso el texto: ${nombre} ${apellido}`);
  console.log(""+dibujarGuiones(simbolo));
}

imprimirNombre(nombre, apellido);

      
     
    
    

    
    







