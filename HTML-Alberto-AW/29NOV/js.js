//function ejercicio1 (){
   // let numero = parseInt( prompt("dame un numero y te dire si es PAR o IMPAR"));
   // if (esPar(numero)){
   //     alert("El numero es PAR");
   // } else {
   //     alert("es IMPAR");
   // }
//}

//function esPar (numero){
   // if ( numero % 2 == 0){
   //     return true;
//} else {
 //   return false
//}

function ejercicio2 (){
    let a = parseInt (prompt("dame el primer numero"));
    let b = parseInt (prompt("dame el segundo numero"));
    let c = parseInt (prompt("dame el tercer numero"));
    if (a > b && a > c){
        console.log(" el mayor de todos es " + a);
    } else if (b > a && b > c){
        console.log("el mayor de todos es " + b);
    } else {
        console.log("el mayor de todos es "+ c);
    }
    
}

function ejercicio3 (){
    let nota = parseInt(prompt("que nota has sacado?"));

    if(nota >= 91 && nota < 101){
        console.log("La nota es un sobresaliente");


    } else {
        console.log("no es sobresaliente");
    }
}

function ejercicio4 (){
    let ano = parseInt(prompt("dame un año"))

    if (ano % 4 == 0){
        console.log("Tu año es bisiesto")
    } else {
        console.log("tu año no es bisiesto")
    }
}

function ejercicio5 (){
    let numero = parseInt(prompt("dame un numero y te dire si es negativo, positivo o cero"))
    if( numero == 0){
        console.log("el numero es 0")
        
    } else if (numero > 0){
        console.log("El numero es positivo")
    } else{
        console.log("el numero es negativo")
    }
}