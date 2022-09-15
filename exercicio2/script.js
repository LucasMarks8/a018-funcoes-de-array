// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, 
// Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. 
// Crie uma `const metades`, e guarde o valor do array nesta const;

const array = [3, 6, 10, 25, 33, 62, 98, 102]

//1)
const triplos = array.map((numero) => {
    return numero * 3
})

console.log(triplos)

//2)tipo curto
const metades = array.map(numero => numero / 2)

console.log(metades)