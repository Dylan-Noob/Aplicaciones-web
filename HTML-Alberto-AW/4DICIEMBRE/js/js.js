function cambiarparrafo(){
    let a = (prompt("escribre tu nombre crack"))
    document.getElementById('parrafo').innerText = a;
}

function apellido(){
    let b = (prompt("dame tu apellido"))
    document.getElementById('apellido').innerText = b;
}

function fondo(color){

    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';
    
}

function mostrarocultar(){
    const texto= document.getElementById('hola');
    if (texto.style.display === 'none'){
        texto.style.display = 'block'
    } else {
         texto.style.display = 'none'
    }
}