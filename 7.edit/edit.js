console.log("1. administrador");
console.log("2.empleado");
let rol = parseInt(prompt("ingrese el rol")) ;
let Nplanta = parseInt(prompt("ingrese su numero de planta")) ;
let id = parseInt(prompt("ingrese su pin ")) ;
let turno = parseInt(prompt("ingrese su turno")) ;
console.log(rol);
console.log(id);
console.log(Nplanta);
console.log(turno);
switch (rol) {
    case 1:
        let verificacion = parseInt(prompt("Si desea cambiar los datos coloque 1"));
        switch(verificacion){
            case 1:
            let Nplanta = parseInt(prompt("ingrese su numero de planta")) ;
            let id = parseInt(prompt("ingrese su pin ")) ;
            let turno = parseInt(prompt("ingrese su turno")) ;
            console.log(rol);
            console.log(id);
            console.log(Nplanta);
            console.log(turno);
            console.log ("se han cambiado con exito");
            break;
            default:
            break;
        }
        break;
    case 2:
        console.log(rol);
        console.log(id);
        console.log(Nplanta);
        console.log(turno);
        console.log("solo puede visualizar");
    break;
default:
console.log("ingrese una opcion valida");
break;
}