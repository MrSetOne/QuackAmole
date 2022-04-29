// Asignacion de variables
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const radioBtn = document.querySelectorAll('input[name="genero"]')

console.log(radioBtn)

// Libreria de verificaciones
const regex = {
    firstname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
}

// Libreria de funciones

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const tst = document.getElementById("genpato");
    const tst2 = document.getElementById("genaguacate");
    console.log(tst)
    console.log(tst2)

})