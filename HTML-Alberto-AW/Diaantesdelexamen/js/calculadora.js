function sumar(){
    let num1 = document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value ;

    let resultado = parseFloat(num1) + parseFloat(num2);

    document.getElementById("resultado").innerText = "el resultado es " + resultado;
}

function resta(){
    let num1 = document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value ;

    let resultado = parseFloat(num1) - parseFloat(num2);

    document.getElementById("resultado").innerText = resultado;
}

function multiplicar(){
    let num1 = document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value ;

    let resultado = parseFloat(num1) * parseFloat(num2);

    document.getElementById("resultado").innerText = resultado;
}

function dividir(){
    let num1 = document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value ;

    let resultado = parseFloat(num1) / parseFloat(num2);

    document.getElementById("resultado").innerText = resultado;
}

function modulo(){
    let num1 = document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value ;

    let resultado = parseFloat(num1) % parseFloat(num2);

    document.getElementById("resultado").innerText = resultado;
}