// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
//A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// //1)
// const caixaAlta = (objeto1) => {
//     objeto1.nome = objeto1.nome.toUpperCase()
//     objeto1.profissao = objeto1.profissao.toUpperCase()
//     objeto1.username = objeto1.username.toUpperCase()
//     objeto1.senha = objeto1.senha.toUpperCase()
//     console.log(objeto1)
// }

// // console.log(caixaAlta(objeto))

// //2)
// const textoCorrido = (objeto1) => {
//     const textoUnido = [objeto1.nome, objeto1.profissao, objeto1.username, objeto1.senha]
//         console.log(textoUnido)
// }

// // console.log(textoCorrido(objeto))

// //3)
// const callback = (objeto, funcaoCaixaAlta, funcaoTextoCorrido) => {
//     funcaoCaixaAlta(objeto)
//     funcaoTextoCorrido(objeto)
// }

// callback(objeto, caixaAlta, textoCorrido)

//jeito curto
const proToUpper = (objeto) => {
    for(let i in objeto) {
        objeto[i] = objeto[i].toUpperCase()
    }
    return objeto
}

//2)
const showValues = (objeto) => {
    let text = ""
    for(let i in objeto) {
        text += `${objeto[i]}`
    }
    return text.trim()
}

//3)
const objetoCallback = (objeto, funcao) => {
    console.log(funcao(objeto))
}

objetoCallback(objeto, proToUpper)
objetoCallback(objeto, showValues)