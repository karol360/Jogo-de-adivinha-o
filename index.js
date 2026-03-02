//numeros de tentativas
let tentativas = 10
//variavel global 
let numSorteado



// Função para gerar o numero
function gerarNum() {
    //Jogo começa → tentativas = 5
    let res1 = document.getElementById('res1')

    function aleatorioNum(a, b) {
        numSorteado = Math.floor(Math.random() * (b - a + 1)) + a
    }

    let guardarNumSorteado = aleatorioNum(1, 100)
    res1.innerHTML = `Numero gerado, boa sorte 🍀`
}

//Jogador clica
function chutar() {

    // pegando os valores da caixa
    let num = document.getElementById('caixaNum')
    let res = document.getElementById('res')
    let chances = document.getElementById('chances')
    let button = document.getElementById('button')

    // COMEÇA O JOGO
    if ((num.value).length == 0 || (num.value) > 100 || (num.value) < 0 || numSorteado == undefined) {
        window.alert('Valor invalido!! Tente novamente.')
    } else {
        let valorNum = parseInt(num.value)


        // se o o valor digitado for igual ao numero secreto, acabou o jogo
        if (valorNum === numSorteado) {
            res.innerHTML = `🥇 acabou o jogo, voce acertou 🥇`
            button.disabled = true
        } else {

            //tentativas

            tentativas--
            chances.innerHTML = ` ❤️ = ${tentativas}`
            if (tentativas === 0) {
                res.innerHTML = `acabaram suas tentatiavas ☠️, o numero secreto era ${numSorteado}`
                button.disabled = true
                return
            } else {

                //se o valor digitado for maior ou menor que o numero secreto
                if (valorNum > numSorteado) {
                    res.innerHTML = `Está quase, o numero secreto é <strong>MENOR</strong>👇`
                } else {
                    res.innerHTML = `Quase, o numero secreto é <strong>MAIOR</strong> ☝️`
                }
                num.value=''
                num.focus()
            }

        }
    }

}

document.addEventListener('DOMContentLoaded', function(){
    gerarNum()
})
