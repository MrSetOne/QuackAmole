// Asignacion de variables
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const customAlert = document.getElementById("customAlert")
let hotDB = []

// Libreria de verificaciones
const regex = {
    firstname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}

// Libreria de sincronizacion de DB
const dbSync = {
    toLocalStorage: () => {
        localStorage.db = JSON.stringify(hotDB);
    },
    toHotDB: () => {
        hotDB = JSON.parse(localStorage.db)
    }
}

// En el caso de que la DB del Local Storage contenga algo la vuelca a hotDB
if (localStorage.db != undefined) {
    dbSync.toHotDB()
}

// Ejecucion del submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = { //Recenpcion de valores
        name: document.getElementById("nombre").value,
        mail: document.getElementById("email").value,
        psw1: document.getElementById("contraseña1").value,
        psw2: document.getElementById("contraseña2").value,
        gender: document.getElementById("genero").value,
    };

    // Validaciones
    if ((user.name != "") && (user.mail != "") && (user.gender != "") && (user.psw1 != "") && (user.psw2 != "")) {
        if (regex.firstname.test(user.name) && regex.email.test(user.mail)) {
            if (user.psw1 == user.psw2) {
                hotDB.push(user)
                dbSync.toLocalStorage()
            } else {
                //* Aqui hay que poner un alert indicando que las contraseñas no coinciden
            };
        } else {
            //* Alert indicando que el nombre/email no tiene un formato correcto
        };
    } else {
        customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
        customAlert.innerHTML = `Rellena todos los campos`
        setTimeout(() => {
            customAlert.className = "d-none alert alert-success"
        }, 3000)
    };
})