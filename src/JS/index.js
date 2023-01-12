var titulo = document.querySelector('#titulo')
var texto = document.querySelector('#texto')
var moveRightBtn = document.querySelector("div[name='arrow-right']")
var moveLeftBtn = document.querySelector("div[name='arrow-left']")
var background = document.body.style.backgroundImage
var slide = ["url('https://images8.alphacoders.com/643/643469.png')", "url('https://images.alphacoders.com/123/1232363.png')", "url('https://images.alphacoders.com/105/1057850.jpg')", "url('https://images.alphacoders.com/105/1054563.jpg')"]
var titulos = ['Quem foi Barba Branca', 'Seus feitos', 'Sobre sua força', 'Conclusão sobre ele']
var pagina = 0


moveLeftBtn.style.opacity = '0.6'


moveRightBtn.addEventListener('click', function(){
    moveLeftBtn.style.opacity = '1'
    if(pagina == 3){
        moveRightBtn.style.opacity = '0.6'
    }
    
})

moveLeftBtn.addEventListener('click', function(){
    moveRightBtn.style.opacity = '1'
    
    if(pagina <= 0){
         moveLeftBtn.style.opacity = '0.6'
    }
})


let moveRight = function () {
    if (pagina < 3) {
        pagina++
    }
    for (let image in slide) {
        if (image == pagina) {
            console.log(image)
            document.body.style.backgroundImage = slide[pagina]
            titulo.innerHTML = titulos[pagina].toString()
            
        }
    }

    
}


let moveLeft = function () {

    if (pagina > 0) {
        pagina-- 
    }
    for (image in slide){ 
        if (image == pagina) {
            console.log(image)
            document.body.style.backgroundImage = slide[pagina]
            titulo.innerHTML = titulos[pagina].toString()
        }
    }
}

//Uma utilização melhor seria usando classlist. pra manipular os arrays NodeList, e usar css para parte de alterar a tela.
