let numero = parseInt ( prompt("introduce el precio del producto") );

let resto = numero % 2;

if ( resto % 2 ) {
    console.log("Es divisible entre 2")
} else {
    console.log("Es divisible entre 3")
}