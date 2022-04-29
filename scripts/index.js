// Asignacion de variables
const form = document.getElementById("form");
const btn = document.getElementById("btn");
let hotDB = []

// Libreria de verificaciones
const regex = {
    firstname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}

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
        //* Aquí falta que se genere un alert indicando que se rellenen todos los campos
    };
    if (user.psw1 != user.psw2) {
        //* Aqui hay que poner un alert indicando que las contraseñas no coinciden
    }
    if (regex.firstname.test(user.name) && regex.email.test(user.mail)) {
        //* Si acepta el patrón se genera el codigo de dentro
    };
})