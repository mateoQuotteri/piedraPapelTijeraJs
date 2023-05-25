const piedraButton = document.getElementById("piedra")
const tijeraButton = document.getElementById("tijera")
const papelButton = document.getElementById("papel")


let generarRespuesta = function () {
    const numero = Math.random()


    if(numero >= 0.66){
        return "Tijera"
    }else if(numero < 0.66 && numero >= 0.33 ){
        return "Piedra"
    }else{
        return "Papel"
    }
}