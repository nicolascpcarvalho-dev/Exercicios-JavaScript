alert("=-=-=-=-=-=-=- Exercício 09 -=-=-=-=-=-=-=-=")

let salarioAntigo = parseFloat(prompt("Digite o valor do seu salário mensal: "))
let aumento = salarioAntigo * 0.15
let salarioNovo = salarioAntigo + aumento

alert("Seu novo salário é: " + salarioNovo.toFixed(2))
