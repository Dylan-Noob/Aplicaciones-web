let nota
nota = parseInt (prompt("que nota has sacado?"));

if ( nota == 9 || nota == 10 || nota == 8 ) {
    console.log("ha sacado sobresaliente 👹👹👹");
} else if ( nota == 5 ) {
    console.log("por los pelos");
} else if ( nota == 6 || nota == 7 ) {
    console.log("bien");
} else if ( nota == 1 || nota == 2 || nota == 3 || nota ==4 ){
    console.log("joven usted esta suspenso");
} else {
    console.log("eso no es una nota🤣🤣🤣");
}