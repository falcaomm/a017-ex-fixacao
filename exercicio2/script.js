let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite um número"))

// a)
function soma(x, y) {
    return x + y
}

console.log(soma(num1, num2));

// b)
function maiorOuIgual(x, y) {
    return x > y || x === y
}

console.log(maiorOuIgual(num1, num2));

// c)
function pariedade(x) {
    let par
    if (x % 2 === 0) {
        par = "é par"
    } else {
        par = "não é par"
    }
    return par
}

console.log(pariedade(num1));

// d) 
let nome = prompt("Qual seu nome")

function tamanho(x) {
    let msg =`${x.toUpperCase()} tem ${x.length} caracteres`
    return msg
}

console.log(tamanho(nome));