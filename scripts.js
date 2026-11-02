const resultado = document.querySelector(".result")
const meusPontos = document.querySelector(".meus-pontos")
const pontosMaquina = document.querySelector(".pontos-maquina")

let scoreHumano = 0
let scoreMaquina = 0

const playHuman = (EscolhaUsuario) => {
    jogar(EscolhaUsuario, playMachine())
}

const playMachine = () => {
    const escolhas = ['rock', 'paper', 'scissors']
    const numeroaleatorio = Math.floor(Math.random() * 3)

    return escolhas[numeroaleatorio]
}

const jogar = (humano, maquina) => {

    if(humano === maquina) {
        resultado.innerHTML = "Deu empate"
    } else if(humano === 'paper' && maquina === 'rock' || humano === 'rock' && maquina === 'scissors' || humano === 'scissors' && maquina === 'paper' ) {
        scoreHumano++
        meusPontos.innerHTML = scoreHumano
        resultado.innerHTML = "Você ganhou"

    } else {
        resultado.innerHTML = "Você perdeu"
        scoreMaquina++
        pontosMaquina.innerHTML = scoreMaquina
        
    }
}