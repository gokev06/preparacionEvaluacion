console.log("Longitud");
console.log("1. Pasar km a m");
console.log("2. Pasar cm a m");
console.log("3. Pasar cm a mm");

let menu = parseInt(prompt("selecciona una opcion, colocando el numero de este"));
switch (menu){
    case 1:
        let n1 = parseInt(prompt("ingrese el numero"));
        let ope = n1 * 1000/1.0
        console.log("la comversion es de", ope) ("m");
        break;
    case 2:
        let n2 = parseInt(prompt("ingrese el numero"));
        let ope2 = n2 * 1.0/100
        console.log("la comversion es de", ope2) ("m");
        break;
    case 3:
        let n3 = parseInt(prompt("ingrese el numero"));
        let ope3 = n3 * 10/1.0
        console.log("la comversion es de", ope3) ("mm");
    default:
        console.log("esta no es una opcion");;
        break;
}