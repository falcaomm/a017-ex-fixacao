//nome normal 
let nome = prompt("qual seu nome")

function funcaoNome(x) {
    console.log("olá", x);
}
funcaoNome(nome)

//nome arrow 
const funcaoNome2 = (x) => console.log("olá", x)
funcaoNome2(nome)

// Tabuada normal 

let num = Number(prompt("Número aq"))

function funcaoTabuada(x) {
    for (let i = 0; i <= 10; i++) {
        console.log(x*i);
    }
}

funcaoTabuada(num)

// Tabuada arrow 

const funcaoTabuada2 = (x) => {
    for (let i = 0; i <= 10; i++) {
        console.log(x*i);
    }
}

funcaoTabuada2(num)