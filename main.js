const personas = [
    new Persona("Juan","Diaz"),
    new Persona("Marta","Delgado")
];

const mostrarPersonas = () =>{
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById("personas").innerHTML = texto;
}

const agregarPersonas = () => {
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();

    if (nombre && apellido) {
        const nuevaPersona = new Persona(nombre, apellido);
        personas.push(nuevaPersona);
        mostrarPersonas();

        //limpiamos los campos
        nombreInput.value = "";
        apellidoInput.value = "";
    } else {
        alert("Por favor, introduce nombre y apellido.")
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarPersonas();

    const botonAgregar = document.getElementById("agregar");
    botonAgregar.addEventListener("click", agregarPersonas);

});


