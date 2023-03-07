
let contraseña = prompt("Ingrese una contraseña");    
if  (contraseña.includes (" ") && (length => 8 && length <=15)) {
    console.log("la contraseña es valida");
} else{
    console.log("la contraseña no es valida");
}
