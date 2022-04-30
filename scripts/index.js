// Asignacion de variables
const form = document.getElementById("form");
const btn = document.getElementById("btn");
let hotDB = []

// Libreria de verificaciones
const regex = {
    firstname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}

// Libreria de sincronizacion de DB
const dbSync = {
    toLocalStorage: () => {
        return JSON.stringify(hotDB);
    },
    toHotDB: () => {
        return JSON.parse(localStorage.db)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let users = {
        name: document.getElementById("nombre").value,
        mail: document.getElementById("email").value,
        psw1: document.getElementById("contraseña1").value,
        psw2: document.getElementById("contraseña2").value,
        gender: document.getElementById("genero").value,
    };

// for (const user of users)

    // Inicio de las validaciones
    if ((users.name != "") && (users.mail != "") && (users.gender != "") && (users.psw1 != "") && (users.psw2 != "")) {
        if (regex.firstname.test(users.name) && regex.email.test(users.mail)) {
            if (users.psw1 == users.psw2) {
                //* Volcar a BD
            } else {
                //* Aqui hay que poner un alert indicando que las contraseñas no coinciden
            };
        } else {
            //* Alert indicando que el nombre/email no tiene un formato correcto
        };
    } else {
        <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                Parece que te has olvidado de rellenar algún campo 🙈
                </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    };
})