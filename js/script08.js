/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores.*/

let totalEleitores = parseInt(prompt("Digite o nomero total de eleitores do município: "))
let votosBrancos = parseInt(prompt("Digiteo numero de votos brancos: "))

let votosNulos = parseInt(prompt("Digite o numero do votos nulos: "))
let votosValidos = parseInt(prompt("Digite o numero de votos validos: "))

let percBrancos = (votosBrancos / totalEleitores) * 100
let percNulos = (votosNulos / totalEleitores) * 100
let percValidos = (votosValidos / totalEleitores) * 100

alert("Percentual de votos brancos: " + percBrancos.toFixed(2)+ "%")
alert("Percentual de votos nulos: " + percNulos.toFixed(2) + "%")
alert("Percentual de votos validos: " + percValidos.toFixed(2) + "%")