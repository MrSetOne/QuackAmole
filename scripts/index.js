// Asignacion de variables
const form = document.getElementById("form");
const btn = document.getElementById("btn");

// Libreria de verificaciones
const regex = {
    firstname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}

// Libreria de funciones


// 


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = {
        name: document.getElementById("nombre").value,
        mail: document.getElementById("email").value,
        psw1: document.getElementById("contraseña1").value,
        psw2: document.getElementById("contraseña2").value,
        gender: document.getElementById("genero").value,
    };

    // Inicio de las validaciones
    if ((user.name == "") || (user.mail == "") || (user.gender == "") || (user.psw1 == "") || (user.psw2 == "")) {
        // Aquí falta que se genere un alert indicando que se rellenen todos los campos
    };
    if (regex.firstname.test(user.name) && regex.email.test(user.mail)) { //Aqui falta la verificacion de genero
        // Si acepta el patrón se genera el codigo de dentro
    };
    console.log(user.gender)
})