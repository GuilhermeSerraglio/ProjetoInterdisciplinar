
const iconeCopia1 = document.getElementById("iconeCopia1")
const iconeCopia2 = document.getElementById("iconeCopia2")
const mensagemAviso = document.getElementById("mensagemAviso")
const botaoFlutuante = document.getElementById("botaoFlutuante")
const menuCelular = document.getElementById("menuCelular")
const navbar = document.getElementById("navbar")

window.onscroll = function() {
  if(document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    botaoFlutuante.classList.remove("hidden")
  } else {
    botaoFlutuante.classList.add("hidden")
  }
}

iconeCopia1.addEventListener('click', function() {
  navigator.clipboard.writeText("guilherme.piccini@hotmail.com");
  mensagemAviso.classList.remove("hidden")
})

iconeCopia2.addEventListener("click", function() {
  navigator.clipboard.writeText("(66) 99225-4072")
  mensagemAviso.classList.remove("hidden")
})

menuCelular.addEventListener("click", function() {
  menuCelular.classList.toggle("efeito")
  navbar.classList.toggle("hidden")
})

navbar.addEventListener("click", function() {
  navbar.classList.add("hidden")
  menuCelular.classList.remove("efeito")
})