let TempFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "))
let TemCelsius = (TempFahrenheit - 32) / 1.8
alert("A temperatura em Celsius é:" + TemCelsius.toFixed(0) + "C°")