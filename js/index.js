// Asignacion de variables
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const customAlert = document.getElementById("customAlert")
const userCards = document.getElementById("userCards")
const pato = document.getElementById("duck")
const aguacate = document.getElementById("avocado")
let hotDB = []
let arrayUsers = []

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
    let users = { //Recenpcion de valores
        name: document.getElementById("nombre").value,
        mail: document.getElementById("email").value,
        psw1: document.getElementById("contraseña1").value,
        psw2: document.getElementById("contraseña2").value,
        gender: document.getElementById("genero").value,
    };


function imgGender(){
    if (gender == pato){
        <img src="../assets/svg/duck-svgrepo-com.svg" style="height: 60px;" class="m-auto"></img>
    }
    else {
        <img src="../assets/svg/avocado-svgrepo-com (1).svg" style="height: 60px;" class="m-auto"></img>
    }
}

userCards.innerHTML = ""
for(let user of users){
    userCards.innerHTML += `
    <div class="container " style="max-width: 550px;">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center" style="height: 175px; background: hsla(151, 56%, 36%, 1); background: radial-gradient(circle, hsla(151, 56%, 36%, 1) 0%, hsla(152, 32%, 65%, 1) 100%); background: -moz-radial-gradient(circle, hsla(151, 56%, 36%, 1) 0%, hsla(152, 32%, 65%, 1) 100%); background: -webkit-radial-gradient(circle, hsla(151, 56%, 36%, 1) 0%, hsla(152, 32%, 65%, 1) 100%); filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#288F5E', endColorstr='#8BC3A9', GradientType=1);"></div>
                <div class="col-md-8">
                    ${imgGender()}
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.mail}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

localStorage.setItem('key', JSON.stringify(users))
let arrayUsers = JSON.parse(localStorage.getItem('key'))

    // Validaciones
    if ((users.name != "") && (users.mail != "") && (users.gender != "") && (users.psw1 != "") && (users.psw2 != "")) {
        if (regex.firstname.test(users.name) && regex.email.test(users.mail)) {
            if (users.psw1 == users.psw2) {
                hotDB.push(users)
                dbSync.toLocalStorage()
            } else {
                //* Aqui hay que poner un alert indicando que las contraseñas no coinciden
            };
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