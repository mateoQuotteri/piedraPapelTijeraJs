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
    const resultado = generarRespuesta()
    console.log(resultado);
    if(resultado === "Piedra"){
      resultBox.classList.remove("none")
      p.classList.add("lose")
      icon.classList.add("lose")
      icon.classList.add("fa-solid fa-thumbs-down")
  
      p.innerHTML = "Has perdido, la maquina jugo Piedra y tu has jugado tijera"
  }
  
  else if(resultado === "Tijera"){
      resultBox.classList.remove("none")
      p.classList.add("draw")
      icon.classList.add("draw")
      icon.classList.add("fa-solid fa-handshake")
      
      p.innerHTML = "Has empatado, la maquina jugo Tijera y tu has jugado Tijera"
  }else{
      resultBox.classList.remove("none")
      p.classList.add("win")
      icon.classList.add("win")
      icon.classList.add("fa-sharp fa-solid fa-thumbs-up")
      
      p.innerHTML = "Has ganado, la maquina jugo Papel y tu has jugado Tijera"
  }
  })



