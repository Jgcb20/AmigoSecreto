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

    //Llama a la función que va listando los amigos que se escriben
    mostrarAmigos();
    }

}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar lista antes de actualizar
    lista.innerHTML = ""; 
   
    //Va mostrando la lista generada
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
   
    let seleccionarAmigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[seleccionarAmigoAleatorio];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSeleccionado}</strong>`;

    //Llama a la funcón 
    noMostrarLista();
}


//Función para que no aparezca la lista de amigos mientras se sortea
function noMostrarLista(){
    let vaciarlista = document.getElementById("listaAmigos");

    // Limpiar lista antes de actualizar
    vaciarlista.innerHTML = ""; 

}