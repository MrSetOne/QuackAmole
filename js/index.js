// Asignacion de variables
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const customAlert = document.getElementById("customAlert")
let hotDB = []

// Libreria de verificaciones
const regex = {
    firstname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    psw: {
        whiteSpace: /^(?=.*\s)/,
        uppercase: /^(?=.*[A-Z])/,
        lowercase: /^(?=.*[a-z])/,
        number: /^(?=.*[0-9])/,
        length: /^.{8,25}$/,
    },
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
    let users = { //Recenpcion de valores
        name: document.getElementById("nombre").value,
        mail: document.getElementById("email").value,
        psw1: document.getElementById("contraseña1").value,
        psw2: document.getElementById("contraseña2").value,
        gender: document.getElementById("genero").value,
    };

    // Validaciones
    if ((users.name != "") && (users.mail != "") && (users.gender != "") && (users.psw1 != "") && (users.psw2 != "")) {
        if (regex.firstname.test(users.name) && regex.email.test(users.mail)) {
            if (regex.psw.lowercase.test(users.psw1) && regex.psw.uppercase.test(users.psw1) && (regex.psw.whiteSpace.test(users.psw1) != true) && regex.psw.number.test(users.psw1) && (regex.psw.length.test(users.psw1) != true)) {
                if (users.psw1 == users.psw2) {
                    hotDB.push(users)
                    dbSync.toLocalStorage()
                    customAlert.className = "d-grid alert w-50 m-auto alert-success text-center fixed-bottom mb-5"
                    customAlert.innerHTML = `<h4>¡Has sido Quackamoleado con exito!</h4><p>Si quieres ver todos los Quackamoles <a href="./pages/db.html" class="alert-link">pincha aquí</a></p>`
                    setTimeout(() => {
                        customAlert.className = "d-none alert alert-success"
                    }, 6000)
                    document.getElementById("nombre").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("contraseña1").value = "";
                    document.getElementById("contraseña2").value = "";
                    document.getElementById("genero").value = "";
                } else {
                    customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
                    customAlert.innerHTML = `Las constraseñas no coinciden, por favor, comprueba que ambas coincidan (T_T)`
                    setTimeout(() => {
                        customAlert.className = "d-none alert alert-success"
                    }, 3000)
                };
            } else {
                if (regex.psw.lowercase.test(users.psw1)) {
                    if (regex.psw.uppercase.test(users.psw1)) {
                        if ((regex.psw.whiteSpace.test(users.psw1)) != true) {
                            if (regex.psw.number.test(users.psw1)) {
                                if ((regex.psw.length.test(users.psw1)) != true) {
                                    customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
                                    customAlert.innerHTML = `Tu contraseña tiene que tener entre 8 y 25 caracteres (T_T)`
                                    setTimeout(() => {
                                        customAlert.className = "d-none alert alert-success"
                                    }, 3000)
                                }
                            } else {
                                customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
                                customAlert.innerHTML = `Tu contraseña tiene que tener al menos un numero (T_T)`
                                setTimeout(() => {
                                    customAlert.className = "d-none alert alert-success"
                                }, 3000)
                            }
                        } else {
                            customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
                            customAlert.innerHTML = `Tu contraseña no puede tener espacios en blanco (T_T)`
                            setTimeout(() => {
                                customAlert.className = "d-none alert alert-success"
                            }, 3000)
                        }
                    } else {
                        customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
                        customAlert.innerHTML = `La contraseña tiene que tener al menos una mayuscula (T_T)`
                        setTimeout(() => {
                            customAlert.className = "d-none alert alert-success"
                        }, 3000)
                    }
                } else {
                    customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
                    customAlert.innerHTML = `La contraseña tiene que tener al menos una minuscula (T_T)`
                    setTimeout(() => {
                        customAlert.className = "d-none alert alert-success"
                    }, 3000)
                }
            }
        } else {
            customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
            customAlert.innerHTML = `El nombre/correo no tienen un formato correcto ＞﹏＜`
            setTimeout(() => {
                customAlert.className = "d-none alert alert-success"
            }, 3000)
        };
    } else {
        customAlert.className = "d-grid alert w-50 m-auto alert-warning text-center fixed-bottom mb-5"
        customAlert.innerHTML = `Rellena todos los campos (ㆆ_ㆆ)`
        setTimeout(() => {
            customAlert.className = "d-none alert alert-success"
        }, 3000)
    };
})