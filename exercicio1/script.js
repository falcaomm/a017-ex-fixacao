//nome normal 
let nome = prompt("qual seu nome")

function funcaoNome() {
    console.log("olá", nome);
}
console.log(funcaoNome());

//nome arrow 
const funcaoNome2 = () => console.log("olá", nome);
console.log(funcaoNome2());

// Tabuada normal 

let num = Number(prompt("Número aq"))

let tabuada = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let tabuada2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function funcaoTabuada(array) {
    for (let i in array) {
        console.log(num * (Number(i)));
    }
}

console.log(funcaoTabuada(tabuada));
2
// Tabuada arrow

const funcaoTabuada2 = (array) => {
    for (let i in array) {
        console.log(num * i);
    }
}

console.log(funcaoTabuada2(tabuada2));