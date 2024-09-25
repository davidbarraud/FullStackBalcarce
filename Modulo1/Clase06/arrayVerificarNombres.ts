/*
Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.
*/
import * as rls from "readline-sync";
console.clear();

console.log(`======= Verificar si el nombre ingresado esta dentro del Arreglo de nombres ========`);
  
const nombres : string[] = ["Marty", "Jennifer", "Emmet", "Biff", "Lorraine"];
let nombreIngresado: string = rls.question(`Ingrese un nombre: `);
let dimension: number = nombres.length;
let bandera: number = 0;
let nombreIgual : string = ""; 
let posicion : number =0; 

console.log(` \n********** Calculando **********`);

//Función que recorre e imprime el arreglo.
function imprimirArray(){
  for (let i = 0; i < dimension ; i++) {
    console.log(` El nombre en la posicion ${i+1} es: ${nombres[i]}`);
  }
}

//Recorre el array y verifica si el nombre ingresado está dentro del mismo.
for (let i = 0; i < dimension ; i++) {
  if (nombres[i].toLowerCase() == nombreIngresado.toLowerCase()) {
   nombreIgual = nombres[i];
   bandera = 1;
   posicion = i+1;
  } 
 }

//Verifica si el nombre ingresado está dentro del array ya que si bandera es igual a 1 significa que hubo un match.
 if (bandera == 1) {
  console.log(` El nombre que ingresaste: ${nombreIngresado} está dentro del arreglo en la posición ${posicion}. \n`);
  imprimirArray();
 // console.log(`  ${imprimirArray()}  `);esto arrojaba un resultado undefined

 } else {
  console.log(` El nombre que ingresaste: ${nombreIngresado} no está dentro del arreglo.\n`);
  imprimirArray();
 // console.log(`  ${imprimirArray()}  `); esto arrojaba un resultado undefined
 }

 

 


  
  


      
     
    
    

    
    







