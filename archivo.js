const piedraButton = document.getElementById("piedra")
const tijeraButton = document.getElementById("tijera")
const papelButton = document.getElementById("papel")
const icon =  document.getElementById("icon")
const p = document.getElementById("p")
const resultBox = document.getElementById("result")

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


tijeraButton.addEventListener("click", function(){
    const numero = Math.random()
let resultado;

    if(numero >= 0.66){
        resultado = "Tijera"
    }else if(numero < 0.66 && numero >= 0.33 ){
        resultado = "Piedra"
    }else{
        resultado = "Papel"
    }

    if(resultado === "Piedra"){
      resultBox.classList.remove("none")
      p.classList.add("lose")
      p.classList.remove("win")
      p.classList.remove("draw")
      icon.classList.add("lose")
     // icon.classList.add("fa-solid fa-thumbs-down")
  
      p.innerHTML = "Has perdido, la maquina jugo Piedra y tu has jugado tijera"
      console.log("perdiste");
  }
  
  else if(resultado === "Tijera"){
      resultBox.classList.remove("none")
      p.classList.add("draw")
      p.classList.remove("win")
      p.classList.remove("lose")
      icon.classList.add("draw")
    //  icon.classList.add("fa-solid fa-handshake")
      
      p.innerHTML = "Has empatado, la maquina jugo Tijera y tu has jugado Tijera"

      console.log("empataste");

  }else{
      resultBox.classList.remove("none")
      p.classList.add("win")
      p.classList.remove("lose")
      p.classList.remove("draw")
      icon.classList.add("win")
    //  icon.classList.add("fa-sharp fa-solid fa-thumbs-up")
      
      p.innerHTML = "Has ganado, la maquina jugo Papel y tu has jugado Tijera"

      console.log("ganaste");

  }
  })



