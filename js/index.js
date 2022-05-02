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

function loadBar(text, color, time) {
    customAlert.className = `d-grid alert w-50 m-auto alert-${color} text-center fixed-bottom mb-5`
    customAlert.innerHTML = `${text}
    <div class="progress mt-2" style="height: 5px;">
    <div class="progress-bar bg-${color}" style="width:0; animation: progress-bar ${time}s forwards;" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>`
    setTimeout((time) => {
        customAlert.className = "d-none alert alert-success"
    }, time * 1000)
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
            if (regex.psw.lowercase.test(users.psw1) && regex.psw.uppercase.test(users.psw1) && (regex.psw.whiteSpace.test(users.psw1) != true) && regex.psw.number.test(users.psw1) && regex.psw.length.test(users.psw1)) {
                if (users.psw1 == users.psw2) {
                    hotDB.push(users)
                    dbSync.toLocalStorage()
                    customAlert.className = "d-grid alert w-50 m-auto alert-success text-center fixed-bottom mb-5"
                    customAlert.innerHTML = `
                    <h4>¡Has sido Quackamoleado con éxito!</h4>
                    <p>Si quieres ver todos los Quackamoles <a href="./pages/db.html" class="alert-link">pincha aquí</a></p>
                    <div class="progress mt-2" style="height: 5px;">
                        <div class="progress-bar bg-success" style="width:0; animation: progress-bar 6s forwards;" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>`
                    setTimeout(() => {
                        customAlert.className = "d-none alert alert-success"
                    }, 6000)
                    document.getElementById("nombre").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("contraseña1").value = "";
                    document.getElementById("contraseña2").value = "";
                    document.getElementById("genero").value = "";
                } else {
                    loadBar("Las constraseñas no coinciden, por favor, comprueba que ambas coincidan (T_T)", "warning", 3)
                };
            } else {
                if (regex.psw.lowercase.test(users.psw1)) {
                    if (regex.psw.uppercase.test(users.psw1)) {
                        if ((regex.psw.whiteSpace.test(users.psw1)) != true) {
                            if (regex.psw.number.test(users.psw1)) {
                                if ((regex.psw.length.test(users.psw1)) != true) {
                                    loadBar("Tu contraseña tiene que tener entre 8 y 25 caracteres (T_T)", "warning", 3)
                                }
                            } else {
                                loadBar("Tu contraseña tiene que tener al menos un numero (T_T)", "warning", 3)
                            }
                        } else {
                            loadBar("Tu contraseña no puede tener espacios en blanco (T_T)", "warning", 3)
                        }
                    } else {
                        loadBar("La contraseña tiene que tener al menos una mayuscula (T_T)", "warning", 3)
                    }
                } else {
                    loadBar("La contraseña tiene que tener al menos una minuscula (T_T)", "warning", 3)
                }
            }
        } else {
            loadBar("El nombre/correo no tienen un formato correcto ＞﹏＜", "warning", 3)
        };
    } else {
        loadBar("Rellena todos los campos (ㆆ_ㆆ)", "warning", 3)
    };
})