const piedraButton = document.getElementById("piedra")
const tijeraButton = document.getElementById("tijera")
const papelButton = document.getElementById("papel")
const img =  document.getElementById("img")
const p = document.getElementById("p")
const resultBox = document.getElementById("result")




tijeraButton.addEventListener("click", function(){
    const numero = Math.random()
let resultado;
console.log(img);
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
      img.classList.remove("none")
    
     // icon.classList.add("fa-solid fa-thumbs-down")
     img.src = "./perdiste.jpg"
      p.innerHTML = "Has perdido, la maquina jugo Piedra y tu has jugado Tijera."
      console.log("perdiste");
  }
  
  else if(resultado === "Tijera"){
      resultBox.classList.remove("none")
      p.classList.add("draw")
      p.classList.remove("win")
      p.classList.remove("lose")
      
    //  icon.classList.add("fa-solid fa-handshake")
    img.classList.remove("none")
    img.src = "./draw.jpeg"
      p.innerHTML = "Has empatado, la maquina jugo Tijera y tu has jugado Tijera."

      console.log("empataste");

  }else{
      resultBox.classList.remove("none")
      p.classList.add("win")
      p.classList.remove("lose")
      p.classList.remove("draw")
      img.classList.remove("none")

    //  icon.classList.add("fa-sharp fa-solid fa-thumbs-up")
    img.src = "./win.jpg"
      p.innerHTML = "Has ganado, la maquina jugo Papel y tu has jugado Tijera."

      console.log("ganaste");

  }
  })





  piedraButton.addEventListener("click", function(){
    const numero = Math.random()
let resultado;
console.log(img);
    if(numero >= 0.66){
        resultado = "Tijera"
    }else if(numero < 0.66 && numero >= 0.33 ){
        resultado = "Piedra"
    }else{
        resultado = "Papel"
    }

    if(resultado === "Papel"){
      resultBox.classList.remove("none")
      p.classList.add("lose")
      p.classList.remove("win")
      p.classList.remove("draw")
      img.classList.remove("none")
    
     // icon.classList.add("fa-solid fa-thumbs-down")
     img.src = "./perdiste.jpg"
      p.innerHTML = "Has perdido, la maquina jugo Papel y tu has jugado Piedra."
      console.log("perdiste");
  }
  
  else if(resultado === "Piedra"){
      resultBox.classList.remove("none")
      p.classList.add("draw")
      p.classList.remove("win")
      p.classList.remove("lose")
      
    //  icon.classList.add("fa-solid fa-handshake")
    img.classList.remove("none")
    img.src = "./draw.jpeg"
      p.innerHTML = "Has empatado, la maquina jugo Piedra y tu has jugado Piedra."

      console.log("empataste");

  }else{
      resultBox.classList.remove("none")
      p.classList.add("win")
      p.classList.remove("lose")
      p.classList.remove("draw")
      img.classList.remove("none")

    //  icon.classList.add("fa-sharp fa-solid fa-thumbs-up")
    img.src = "./win.jpg"
      p.innerHTML = "Has ganado, la maquina jugo Tijera y tu has jugado Piedra."

      console.log("ganaste");

  }
  })
  papelButton.addEventListener("click", function(){
    const numero = Math.random()
let resultado;
console.log(img);
    if(numero >= 0.66){
        resultado = "Tijera"
    }else if(numero < 0.66 && numero >= 0.33 ){
        resultado = "Piedra"
    }else{
        resultado = "Papel"
    }

    if(resultado === "Tijera"){
      resultBox.classList.remove("none")
      p.classList.add("lose")
      p.classList.remove("win")
      p.classList.remove("draw")
      img.classList.remove("none")
    
     // icon.classList.add("fa-solid fa-thumbs-down")
     img.src = "./perdiste.jpg"
      p.innerHTML = "Has perdido, la maquina jugo Tijera y tu has jugado Papel."
      console.log("perdiste");
  }
  
  else if(resultado === "Papel"){
      resultBox.classList.remove("none")
      p.classList.add("draw")
      p.classList.remove("win")
      p.classList.remove("lose")
      
    //  icon.classList.add("fa-solid fa-handshake")
    img.classList.remove("none")
    img.src = "./draw.jpeg"
      p.innerHTML = "Has empatado, la maquina jugo Papel y tu has jugado Papel."

      console.log("empataste");

  }else{
      resultBox.classList.remove("none")
      p.classList.add("win")
      p.classList.remove("lose")
      p.classList.remove("draw")
      img.classList.remove("none")

    //  icon.classList.add("fa-sharp fa-solid fa-thumbs-up")
    img.src = "./win.jpg"
      p.innerHTML = "Has ganado, la maquina jugo Piedra y tu has jugado Papel."

      console.log("ganaste");

  }
  })
