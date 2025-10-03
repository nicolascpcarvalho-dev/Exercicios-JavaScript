let nota1 = parseFloat(prompt("Digitre sua primeira nota: "))
let nota2 = parseFloat(prompt("Digite sua segunda nota: "))
let nota3 = parseFloat(prompt("Digite sua terceira nota: "))

let media = (nota1*2 + nota2*3 + nota3*5) / 10
alert("A média ponderada é: " + media.toFixed(2))