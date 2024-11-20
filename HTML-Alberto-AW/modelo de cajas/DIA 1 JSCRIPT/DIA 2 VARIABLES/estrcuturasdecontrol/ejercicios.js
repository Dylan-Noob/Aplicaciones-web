let precio;
precio = parseInt ( prompt("introduce el precio del producto") );
//let precioXeliva = (precio * 21);
//let preciomassuma = (precio + precioXeliva);
//let preciofinal = (preciomassuma / 100);
let iva = 0.21;
let real = precio * iva;
let final = (precio + real);

//console.log(" el resultado es : " + preciofinal);

alert("el precio total es " + final + "€");