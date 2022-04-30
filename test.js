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

const psw = "DonJamones55"


if (regex.psw.lowercase.test(psw) && regex.psw.uppercase.test(psw) && (regex.psw.whiteSpace.test(psw) != true) && regex.psw.number.test(psw) && (regex.psw.length.test(psw) != true)) {
    console.log("Que pollas pasa?")
}

if (regex.psw.lowercase.test(psw)) {
    console.log("El primero funciona");
}

if (regex.psw.lowercase.test(psw) && regex.psw.uppercase.test(psw)) {
    console.log("El segundo funciona");
}

if (regex.psw.lowercase.test(psw) && regex.psw.uppercase.test(psw) && (regex.psw.whiteSpace.test(psw) != true)) {
    console.log("El tercero funciona");
}
if (regex.psw.lowercase.test(psw) && regex.psw.uppercase.test(psw) && (regex.psw.whiteSpace.test(psw) != true) && regex.psw.number.test(psw)) {
    console.log("El cuarto funciona");
}

if (regex.psw.lowercase.test(psw) && regex.psw.uppercase.test(psw) && (regex.psw.whiteSpace.test(psw) != true) && regex.psw.number.test(psw) && (regex.psw.length.test(psw) == true)) {
    console.log("Que pollas pasa?")
}

console.log(regex.psw.length.test(psw))