
colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades = [69, 66, 58, 61, 60, 64, 59, 55]
temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29]


function verificarAposentadoria(nome){
    colaborador = false
    idade = 0
    tempoTrabalho = 0

    for (posicao = 0; posicao < colaboradores.length; posicao++) {

        if (nome == colaboradores[posicao]) {
            colaborador = true
            idade = idades[posicao]
            tempoTrabalho = temposDeTrabalho[posicao]
        }
    }
    if (colaborador) {
        porIdade = (idade >= 65)
        porTempoDeTrabalho = (tempoTrabalho >= 30)
        porIdadeComTempoDeTrabalho = (idade >= 60 && tempoTrabalho >= 25)

        if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
            console.log("Parabéns, já pode sair de férias eternas :)")
        } else {
            console.log("Infelizmente, ainda falta um tempo :(")
        }
    
    } else {
        console.log("Colaborador inválido :|")
    }
}
verificarAposentadoria("Rodrigo");