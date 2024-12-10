function calculadoraPartidasRankeadas(vitorias = 0, derrotas = 0) {
    let saldoPartidas = vitorias - derrotas;
    return saldoPartidas;
}

function Rankeadas() {
    return ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
}

let saldoVitorias = calculadoraPartidasRankeadas(93, 2);
let nivel = Rankeadas();

if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[0]}`);
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[1]}`);
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[2]}`); // Corrected index
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[3]}`); // Corrected index
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[4]}`); // Corrected index
} else {
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel[5]}`); //Corrected index.  Assumed you want Imortal as the default
}