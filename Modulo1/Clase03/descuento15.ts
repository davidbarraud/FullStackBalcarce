/*
Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario,
 determine si el cliente tiene descuento o no

*/
import * as readlineSync from "readline-sync";
const descuento: number = 0.15;
const mes : number = 10;
let precioFinal : number;
let total: number;

console.log(`======= Calcular el descuento del producto si se compra en Octubre ========`);
let producto: string = readlineSync.question(`Ingrese el nombre del producto: `);
let precioUnitario: number = readlineSync.questionFloat(`Ingrese el precio del producto: `);
let cantidad: number = readlineSync.questionInt(`Ingrese la cantidad del producto: `);
let mesCompra: number = readlineSync.questionInt(`Ingrese el numero del mes en que compro el producto: `);


console.log(` \n********** Calculando **********`);


if (mesCompra == mes){
    total = precioUnitario * cantidad;
    precioFinal = total - (total * descuento);
    console.log(`\n El precio total del producto '${producto}' con del descuento del 15% es:  $${precioFinal}.`);
} else {
    total = precioUnitario * cantidad;
     console.log(`\n El precio total del producto '${producto}' sin el descuento del 15% es:  $${total}.`);
}


