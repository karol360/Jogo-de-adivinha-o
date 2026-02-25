//fazer o bot gerar um numero de 1 a 100
//fazer com que ele veja se o numero é maior ou menor até acertar 
//escrever na tela se o numero é maior ou menor
//se o numero for igual, o jogo acabou
//5 tentativas 
//=====================================================================




//Jogo começa → tentativas = 5

let tentativas = 5
let numSorteado
///gerar um numero aleatorio



// Função para gerar o numero
function gerarNum() {
    let res1 = document.getElementById('res1')

    numSorteado = function aleatorioNum(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }

    let guardarNumSorteado = aleatorioNum(1, 100)
    res1.innerHTML = `${numSorteado}`
}



//Jogador clica
function chutar() {

    // pegando os valores da caixa
    let num = document.getElementById('caixaNum')
    let res = document.getElementById('res')

    // COMEÇA O JOGO
    if ((num.value).length == 0 || (num.value) > 100 || (num.value) < 0) {
        window.alert('Valor invalido!! Tente novamente.')
    } else {
        let valorNum = parseInt(num.value)

        // se o o valor digitado for igual ao numero sorteado, acabou o jogo
        if (valorNum === numSorteado) {
            res.innerHTML = `acabou o jogo, voce acertou`
        } else {
            res.innerHTML = `voce errou, tente novamente`
        }
    }

}

//O jogo olha: ainda tem tentativas?

//Compara chute com número
//Se acertou → fim
//Se errou: diminui tentativas,informa quantas restam


