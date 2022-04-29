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
        // Falta el genero
    };
    console.log(user.name);
    console.log(user.mail);
    // Inicio de las validaciones
    if ((user.name == "") || (user.mail == "")) { //Aqui falta la verificacion de genero
        // Aquí falta que se genere un alert indicando un error
    };
    if (regex.firstname.test(user.name) && regex.email.test(user.mail)) { //Aqui falta la verificacion de genero
        // Si acepta el patrón se genera el codigo de dentro
    };

})