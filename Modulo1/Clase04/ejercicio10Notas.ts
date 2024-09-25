/*
Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)

*/
import * as readlineSync from "readline-sync";
console.clear();

console.log(`======= Calificaciones de los Alumnos ========`);
  
    let practica: number  ;
    let problemas: number  ;
    let teorica: number;
    let notaFinal : number;
    const diez: number = 0.10;
    const cuarenta: number = 0.40;
    const cincuenta: number = 0.50;

    let nombre: string = readlineSync.question(`Ingresa tu nombre. Para salir no escribas nada y presiona Enter: `);

     while (nombre !== "") {
        practica = readlineSync.questionFloat(`Ingresa la nota de la parte practica: `);
        problemas = readlineSync.questionFloat(`Ingresa la nota de los problemas: `);
        teorica = readlineSync.questionFloat(`Ingresa la nota de la parte teorica: `);

        if (practica < 0 || practica > 10 || problemas < 0 || problemas > 10 || teorica < 0 || teorica > 10){
            console.log(` \n Una o varias de las notas fueron ingresadas de forma incorrecta, seguimos con el siguiente alumno/a.`);
            nombre = readlineSync.question(`Ingresa tu nombre. Para salir no escribas nada y presiona Enter: `); 
        }else {
            
            notaFinal = ((practica * diez) + (problemas * cuarenta) + (teorica * cincuenta)) ;
            console.log(` \n La nota final de ${nombre} es: ${notaFinal.toFixed(2)}.`);
            console.log(` \n----- Siguiente alumno/a ---------`);
            nombre = readlineSync.question(`Ingresa tu nombre. Para salir no escribas nada y presiona Enter: `);
        }
         
    }
    console.log(` \n Saliendo del programa, gracias por participar.`);
    

    
    







