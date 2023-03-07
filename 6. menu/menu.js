console.log("1. hallar perimetro triangulo");
console.log("2. hallar perimetro cuadrado");
console.log("3. hallar area circulo");

let menu = parseInt(prompt("selecciona una opcion, colocando el numero de este"));
switch (menu){
    case 1:
        let lado1 = parseInt(prompt("ingrese el lado "));
        let lado2 = parseInt(prompt("ingrese el otro lado "));
        let lado3 = parseInt(prompt("ingrese el otro lado ")); 
        let suma = lado1 + lado2 + lado3;
        console.log("el perimetro es", suma);
        break;
    case 2:
        let ladoC = parseInt(prompt("ingrese el lado del cuadrado"));
        let sumaC = ladoC + ladoC + ladoC + ladoC
        console.log("el perimetro es", sumaC);
        break;
    case 3:
        let radio = parseInt(prompt("ingrese el perimetro del circulo"));
        let sumaCirculo = 2 * 3.1416 * radio * radio
        console.log("el perimetro es", sumaCirculo);
    default:
        console.log("esta no es una opcion");;
        break;
}
