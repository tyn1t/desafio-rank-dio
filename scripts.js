function calculadoraPartidasRankeadas(vitorias = 0, derrotas = 0) {
    let saldoPartidas = vitorias - derrotas;
    return saldoPartidas;
}

function Rankeadas() {
    return ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
}

let saldoVitorias = calculadoraPartidasRankeadas(93, 2);
let ranks  = Rankeadas();

const rank = [10, 50, 80, 90, 100];

let rankIndex = 0;

for (let index = 0; index < rank.length; index++) {
    
    console.log(rank[index])
    if (saldoVitorias <= rank[index]) {
        rankIndex = index
        break
   }
}
console.log(rankIndex)
console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${ranks[rankIndex -1]}`);

// if (saldoVitorias >= 11 && saldoVitorias <= 20) {
//     console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[0]}`);
// } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
//     console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[1]}`);
// } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
//     console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[2]}`);
// } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
//     console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[3]}`); 
//     console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[4]}`); 
// } else {
//     console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[5]}`);
// }