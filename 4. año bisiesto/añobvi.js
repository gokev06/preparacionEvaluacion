let año= parseInt (prompt("ingrese un año"));
 
bisiesto =año%4;
bisiesto2=año%400;

if (bisiesto ==0){
    console.log("este año es bisiesto");
}
else {
    console.log("este año no es bisiesto");
}