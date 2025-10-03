let nota1 = parseFloat(prompt("Digitre sua primeira nota: "))
let nota2 = parseFloat(prompt("Digitre sua primeira nota: "))

mediaFinal = (nota1 + nota2) / 2

if(mediaFinal >= 6){
    alert("a sua primeira nota foi: " + nota1+ "e sua segunda foi: " + nota2+ " então sua média será: " + mediaFinal.toFixed(2) + " e você foi aprovado!!")
}
else{
    alert("a sua primeira nota foi: " + nota1+ "e sua segunda foi: " + nota2+ " então sua média será: " + mediaFinal.toFixed(2) + " e você foi reprovado!!")
}