// Declaracion de variables
const userCards = document.getElementById("userCards")
let hotDB = []

// Funcion de vuelque a hotDB
function toHotDB() {
    hotDB = JSON.parse(localStorage.db)
}

function printCards() {
    toHotDB()
    for (const user of hotDB) {
        console.log(user.gender)
        userCards.innerHTML += `
        <div id="userCards">
            <div class="container " style="max-width: 550px;">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex justify-content-center align-items-center" style="height: 175px; background: hsla(151, 56%, 36%, 1); background: radial-gradient(circle, hsla(151, 56%, 36%, 1) 0%, hsla(152, 32%, 65%, 1) 100%); background: -moz-radial-gradient(circle, hsla(151, 56%, 36%, 1) 0%, hsla(152, 32%, 65%, 1) 100%); background: -webkit-radial-gradient(circle, hsla(151, 56%, 36%, 1) 0%, hsla(152, 32%, 65%, 1) 100%); filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#288F5E', endColorstr='#8BC3A9', GradientType=1);">
                            <img src="${user.gender}" style="height: 40%;">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body d-flex flex-column justify-content-center h-100 w-100 align-content-center">
                                <h5 class="card-title h3 text-center">${user.name}</h5>
                                <p class="card-text h5 text-center ">${user.mail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         `
    }
}

if (localStorage.db == undefined) {
    userCards.innerHTML = `<h1 class="w-100 text-center">Aún no hay ningún Quackamole registrado ＞︿＜</h1>`
} else {
    printCards();
}