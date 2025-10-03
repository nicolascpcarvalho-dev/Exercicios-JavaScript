/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu)*/

let anoAtual = parseInt(prompt("Digite o ano atual: "))
let anoNasc = parseInt(prompt("Digite o ano do seu nascimento: "))
let idade = anoAtual - anoNasc

if (idade >= 16){
    alert("Você pode votar esse ano!!")
}       
else{
    alert("Você não pode votar esse ano!!")
}