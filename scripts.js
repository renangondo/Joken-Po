const resultado = document.querySelector(".result")
const meusPontos = document.querySelector(".meus-pontos")
const pontosMaquina = document.querySelector(".pontos-maquina")

let scoreHumano = 0
let scoreMaquina = 0

//ENUM -> SnackCase
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (EscolhaUsuario) => {
    jogar(EscolhaUsuario, playMachine())
}

const playMachine = () => {
    const escolhas = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const numeroaleatorio = Math.floor(Math.random() * 3)

    return escolhas[numeroaleatorio]
}

const jogar = (humano, maquina) => {

    if(humano === maquina) {
        resultado.innerHTML = "Deu empate"
    } else if(humano === GAME_OPTIONS.PAPER && maquina === GAME_OPTIONS.ROCK || humano === GAME_OPTIONS.ROCK && maquina === GAME_OPTIONS.SCISSORS || humano === GAME_OPTIONS.SCISSORS && maquina === GAME_OPTIONS.PAPER ) {
        scoreHumano++
        meusPontos.innerHTML = scoreHumano
        resultado.innerHTML = "Você ganhou"

    } else {
        resultado.innerHTML = "Você perdeu"
        scoreMaquina++
        pontosMaquina.innerHTML = scoreMaquina
        
    }
}