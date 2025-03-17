// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variable tipo lista ce almacena a los amigos ingresados
let amigos = [];

//Funcion para hacer la captura de los amigos 
function capturaAmigos() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
   
    //Condición para que no se pueda quedar en blanco
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else{
   

    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = ""; 
    mostrarAmigos();
    }

}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar
   
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}