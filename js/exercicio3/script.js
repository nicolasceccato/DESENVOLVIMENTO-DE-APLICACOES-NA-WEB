let entrada = prompt("Digite seu nome: ", "Seu nome aqui");

let data = new Date();

let hora = data.getHours();
let diaDoMes = data.getDate()
let diaDaSemana = data.getDay();

let mes = data.getMonth()
let ano = data.getFullYear();

let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

let saudacao;
function getSaudacao() {
    if (hora >= 0 && hora < 12) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }
    return saudacao
};


document.addEventListener("DOMContentLoaded", function () {
    let p = document.createElement("p");
    p.textContent = (getSaudacao() + ", " + entrada + ", hoje é: " + diasDaSemana[diaDaSemana] + ", " + diaDoMes + "/" + (mes + 1) + "/" + ano + ".");
    document.body.appendChild(p);
});