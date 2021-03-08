window.onload = function() {
  function setBackgroundColor(color) {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
    localStorage.setItem("backgroundColor", color)
  }

  function setFontColor(color) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.color = color
    }
    localStorage.setItem("fontColor", color)
  }

  function setFontSize(size) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontSize = size
    }
    localStorage.setItem("fontSize", size)
  }

  function setLineHeight(height) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.lineHeight = height
    }
    localStorage.setItem("lineHeight", height)
  }

  function setFontFamily(family) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontFamily = family
    }
    localStorage.setItem("fontFamily", family)
  }

  // background-color
  let backgroundColorButtons = document.querySelectorAll("#background-color")
  for (let i = 0; i < backgroundColorButtons.length; i += 1) {
    backgroundColorButtons[i].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  // font-color
  let fontColorButtons = document.querySelectorAll("#font-color")
  for (let i = 0; i < fontColorButtons.length; i += 1) {
    fontColorButtons[i].addEventListener("click", function(event) {
      setFontColor(event.target.innerHTML)
    })
  }

  // font-size
  let fontSizeButtons = document.querySelectorAll('#font-size')
  for (let i = 0; i < fontSizeButtons.length; i += 1) {
    fontSizeButtons[i].addEventListener("click", function(event) {
      setFontSize(event.target.innerHTML)
    })
  }

  // line-height
  let lineHeightButtons = document.querySelectorAll("#line-height")
  for (let i = 0; i < lineHeightButtons.length; i += 1) {
    lineHeightButtons[i].addEventListener("click", function(event) {
      setLineHeight(event.target.innerHTML)
    })
  }

  // font-family
  let fontFamilyButtons = document.querySelectorAll("#font-family"  )
  for (let i = 0; i < fontFamilyButtons.length; i += 1) {
    fontFamilyButtons[i].addEventListener("click", function(event) {
      setFontFamily(event.target.innerHTML)
    })
  }

  function carregaDadosSalvos() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setFontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if (fontSize) setFontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) setLineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) setFontSize(fontFamily)
  }

  carregaDadosSalvos()
}




















// function backgroundColor(){
// let pai = document.getElementsByClassName('flexy-s')[0]
// let caixaTexto = document.getElementsByClassName('caixa-texto')[0]
// let button = document.createElement('button')
// button.className ='button-bkg-Color'
// button.innerHTML = 'muda de cor da página!'

// pai.appendChild(button)

// button.addEventListener('click', function() {
//   document.body.style.backgroundColor = caixaTexto.value
// })

// } backgroundColor()

// function tamanhoDaLetra(){
//   let pai = document.getElementsByClassName('flexy-t')[0]
//   let caixaTexto = document.getElementsByClassName('fontSize')[0]
//   let button = document.createElement('button')
//   button.className ='button-fnt-size'
//   button.innerHTML = 'muda tamanho da fonte!'
//   pai.appendChild(button)

//   button.addEventListener('click', function() {
//     document.body.style.fontSize = caixaTexto.value
//   }) 
// } tamanhoDaLetra()

// function CorDaLetra(){
//   let pai = document.getElementsByClassName('flexy-u')[0]
//   let caixaTexto = document.getElementsByClassName('fontColor')[0]
//   let button = document.createElement('button')
//   button.className ='button-fnt-color'
//   button.innerHTML = 'muda cor da fonte!'
//   pai.appendChild(button)
  
//   button.addEventListener('click', function() {
//     document.body.style.color = caixaTexto.value
//   }) 
// } CorDaLetra()

// function espaçamentoDeLinha(){
//   let pai = document.getElementsByClassName('flexy-v')[0]
//   let caixaTexto = document.getElementsByClassName('espaçamento')[0]
//   let button = document.createElement('button')
//   button.className ='button-espaçamento'
//   button.innerHTML = 'muda o espaçamento das letras!'
//   pai.appendChild(button)
  
//   button.addEventListener('click', function() {
//     document.body.style.lineHeight= caixaTexto.value
//   }) 
// } espaçamentoDeLinha()

// function alteraFontFamilly(){
//   let pai = document.getElementsByClassName('flexy-w')[0]
//   let caixaTexto = document.getElementsByClassName('font-family')[0]
//   let button = document.createElement('button')
//   button.className ='button-fnt-family'
//   button.innerHTML = 'muda a fontfamily!'
//   pai.appendChild(button)
  
//   button.addEventListener('click', function() {
//     document.body.style.fontFamily= caixaTexto.value
//   }) 
// } alteraFontFamilly()

// let caixaTextoBackGround = document.getElementsByClassName('caixa-texto')[0];
// let batataBackGround = document.body.style.fontSize = caixaTextoBackGround.value

// function initialize() {
//   let backgroundColor = localStorage.getItem("batata")
//   if (backgroundColor) backgroundColor()

//   let fontColor = localStorage.getItem("fontColor")
//   if (fontColor) setFontColor(fontColor)

//   let fontSize = localStorage.getItem("fontSize")
//   if (fontSize) setFontSize(fontSize)

//   let lineHeight = localStorage.getItem("lineHeight")
//   if (lineHeight) setLineHeight(lineHeight)

//   let fontFamily = localStorage.getItem("fontFamily")
//   if (fontFamily) setFontSize(fontFamily)
// }
// }


// initialize()
// }

// localStorage.setItem('batata', batataBackGround) 
// localStorage.getItem('batata')

// let caixaTextoTamanhoLetra = document.getElementsByClassName('fontSize')[0]
// let batataFontSize = document.body.style.fontSize = caixaTextoTamanhoLetra.value
// localStorage.setItem('batataFontSize', 'document.body.style.fontSize = caixaTextoTamanhoLetra.value') 

// }

