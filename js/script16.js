let macas = parseInt(prompt("Digite a quantidade de maçãs compradas: "))
if (macas < 12){
    let ValorTotal = macas * 1.30
    alert("O valor tota da compra é: R$" + ValorTotal.toFixed(2))
}
else{
    macas >= 12
    ValorTotal = macas * 1
    alert("O valor total da compra é: R$" + ValorTotal.toFixed(2))
}