// Logica Jogo
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') { 
    //1500
    criaMosquitoTempo = 1500
} else if(nivel ==='dificil') {
    //1000
    criaMosquitoTempo = 1000
}
else if ( nivel === 'chucknorris') {
    //750
    criaMosquitoTempo = 750
}


// encontrar altura e largura da pagina a partir do objeto window
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
    }

    ajustaTamanhoPalcoJogo()
var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo <= 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        alert('Vitoria')
        window.location.href = 'vitoria.html'
    }
    document.getElementById('cronometro').innerHTML =  tempo
    
},1000)
    function posicaoRandomica() {

        // remover mosquito anterior caso exista
        if(document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove()

            if(vidas > 3) {
                window.location.href = 'fim_de_jogo.html'
            } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
            }
        } 
        
        // Produção das coordenadas do mosquito de forma dinamica
        var posicaoX = Math.floor(Math.random() * largura) - 190
        var posicaoY = Math.floor(Math.random() * altura) - 190


        // Para n ficar negativo fora da tela
        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY

        console.log(posicaoX, posicaoY)

        //criar elemento html 
        var mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosca.png'
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
        mosquito.style.left = posicaoX  + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id = 'mosquito'
        mosquito.onclick = function() {
            //remover elemento HTML
            this.remove()
        }

        document.body.appendChild(mosquito)

    }

    function tamanhoAleatorio() {
        var classe = Math.floor(Math.random() * 3)
        

        switch(classe) {
            case 0:  // quando o identificado da função reconhece oo return e termina a chamada
                return 'mosquito1'
            case 1:
                return 'mosquito2'
            case 2:
                return 'mosquito3'
        }
    }

function ladoAleatorio() {
    var classe = Math.floor(Math.random() *2) 
    console.log(classe)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
        return 'ladoB'
    }
}



