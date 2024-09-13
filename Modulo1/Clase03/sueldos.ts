/*
Una empresa desea premiar a sus empleados con un aumento de sueldo. Este aumento se ajusta a la siguiente tabla:
 0 - 15.000 $ - 20%
15.001 - 20.000  $- 10%
20.001 - 25.000  $ - 5%
Más de 25.000 $ - No hay aumento

Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre

*/
import * as readlineSync from "readline-sync";
const cinco: number = 0.05;
const diez : number = 0.10;
const veinte: number = 0.20;

console.log(`======= Calcular si se aplica el aumento del sueldo  ========`);

let sueldo: number = readlineSync.questionFloat(`Ingrese el sueldo que cobra: `);


console.log(` \n********** Calculando **********`);


if (sueldo < 1 ){
     console.log(`\n No se puede calcular este valor.`);

} else if(sueldo > 0 && sueldo <= 15000 ){
     console.log(`\n Se aplicara un aumento del 20% en su sueldo. El aumento es de $${sueldo * veinte} y estaras cobrando un total de $${(sueldo * veinte) + sueldo}.`);

}else if(sueldo > 15000 && sueldo <= 20000 ){
    console.log(`\n Se aplicara un aumento del 10% en su sueldo. El aumento es de $${sueldo * diez} y estaras cobrando un total de $${(sueldo * diez) + sueldo}.`);

}else if(sueldo > 20000 && sueldo <= 25000 ){
    console.log(`\n Se aplicara un aumento del 5% en su sueldo. El aumento es de $${sueldo * cinco} y estaras cobrando un total de $${(sueldo * cinco) + sueldo}.`);
}else {
    console.log(`\n No se aplicara un aumento  en su sueldo. Su sueldo es de $${sueldo }.`);
}



