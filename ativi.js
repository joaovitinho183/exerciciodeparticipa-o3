let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')
let resposta3 = document.getElementById('resposta3')

function o1() {
    let lado = Number(document.getElementById('lado').value)
    let altu = Number(document.getElementById('altu').value)

    let areaB = lado * lado
    let periB = lado * 4
    let areaL = (periB * altu) / 2
    let areaT = areaB + areaL

    resposta.innerHTML = 'A área da piramide é igual a ' + areaT.toFixed(2)
}

function o2() {
    let lado = Number(document.getElementById('lado').value)
    let altu = Number(document.getElementById('altu').value)

    let areaB = (1 / 2) * lado * altu
    let periB = lado * 3
    let areaL = (1 / 2) * periB * altu
    let areaT = areaB + areaL

    resposta.innerHTML = 'A área da piramide é igual a ' + areaT.toFixed(2)
}

function o3() {
    let volume = Math.PI * (2, 5) * (2, 5) * 22
    let hora = volume * 55
    let dia = hora * 16
    let mes = dia * 30

    resposta.innerHTML = 'O volume da produção em um mês sera de  ' + mes
}

function o4() {
    let m = (1, 27) + (0, 873) + (0, 792) + (0, 559) + (0, 672) + (0, 714) + (0, 623)
    let h = m * 12
    let hv = h * (14, 95)
    let d = h * 22
    let dv = d * (14, 95)
    resposta.innerHTML = 'O valor ganho em 3horas é de R$' + hv.toFixed(2)
    resposta2.innerHTML = 'O valor ganho em 22 dias é de R$' + dv.toFixed(2)
    resposta3.innerHTML = 'Peso total vendido nesses 22 dias é de ' + d.toFixed(2) + 'KG'
}

function o5() {
    let tempe = Number(document.getElementById('tempe').value)

    let celsius = (5 / 9) * (tempe - 32)
    resposta.innerHTML = celsius.toFixed(2) + '° Celcius'
}

function o7() {
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)

    if ((idade >= 0) && (idade < 16)) {
        resposta.innerHTML = 'Você não tem a idade mínima para votar <br>'
        resposta.innerHTML += 'Pois sua idade é ' + idade + ' anos'
    } else if ((idade >= 16) && (idade < 18)) {
        resposta.innerHTML = 'Em função da sua idade, o voto é facultativo <br>'
        resposta.innerHTML = 'Pois sua idade é ' + idade + ' anos'
    } else if ((idade >= 18) && (idade < 70)) {
        resposta.innerHTML = 'Em função da sua idade,o voto é obrigatório <br>'
        resposta.innerHTML = 'Pois sua idade é ' + idade + ' anos'
    } else if (idade >= 70) {
        resposta.innerHTML = 'Em função da sua idade, o voto é facultativo <br>'
        resposta.innerHTML = 'Pois sua idade é ' + idade + ' anos'
    } else {
        resposta.innerHTML = 'Você digitou um valor invalido'
    }
}

function o8() {
    let quant = Number(document.getElementById('quant').value)
    let selet = document.getElementById('selet').value

    if (selet === 't') {
        let v = quant * (5.35);
        resposta.innerHTML = 'Os ' + quant + ' tomates ficarão R$' + v.toFixed(2);
    } else if (selet === 'cb') {
        let v = quant * (3.32);
        resposta.innerHTML = 'As ' + quant + ' cebolas ficarão R$' + v.toFixed(2);
    } else if (selet === 'a') {
        let v = quant * (2.87);
        resposta.innerHTML = 'Os ' + quant + ' aipins ficarão R$' + v.toFixed(2);
    } else if (selet === 'b') {
        let v = quant * (4.43);
        resposta.innerHTML = 'As ' + quant + ' batatas ficarão R$' + v.toFixed(2);
    } else if (selet === 'cn') {
        let v = quant * (3.59);
        resposta.innerHTML = 'As ' + quant + ' cenouras ficarão R$' + v.toFixed(2);
    } else if (selet === 'cc') {
        let v = quant * (1.79);
        resposta.innerHTML = 'Os ' + quant + ' chuchus ficarão R$' + v.toFixed(2);
    }
}

function o9() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let equa = document.getElementById('equa').value

    if (equa == 'A') {
        let res = num1 + num2
        resposta.innerHTML = num1 + " + " + num2 + " = " + res
    } else if (equa == 'S') {
        let res = num1 - num2
        resposta.innerHTML = num1 + " - " + num2 + " = " + res
    } else if (equa == 'M') {
        let res = num1 * num2
        resposta.innerHTML = num1 + " x " + num2 + " = " + res
    } else if (equa == 'D') {
        let res = num1 / num2
        resposta.innerHTML = num1 + " / " + num2 + " = " + res
    } else {
        resposta.innerHTML = "!!!Por favor utilize somente as equações descritas nas regras!!!"
    }
}

function o10() {
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)

    if ((num1 > num2) && (num1 > num3)) {
        resposta.innerHTML = "O maior número é " + num1
    } else if ((num2 > num1) && (num2 > num3)) {
        resposta.innerHTML = "O maior número é " + num2
    } else {
        resposta.innerHTML = "O maior número é " + num3
    }

    if ((num1 < num2) && (num1 < num3)) {
        resposta2.innerHTML = "e menor número é " + num1
    } else if ((num2 < num1) && (num2 < num3)) {
        resposta2.innerHTML = "e menor número é " + num2
    } else {
        resposta2.innerHTML = "e menor número é " + num3
    }
}
function o11() {
    let valor = Number(document.getElementById('valor').value)
    let percen = Number(document.getElementById('percen').value)

    let impos = valor * (0.15)
    let distri = valor * (percen / 100)
    let vt = valor + impos + distri
    resposta.innerHTML = 'O carro sera vendido para o consumidor por R$' + vt
}

function o12() {
    let valor = Number(document.getElementById('valor').value)

    if (valor < 50) {
        let porcen = valor * (0.35)
        let vt = valor + porcen
        resposta.innerHTML = 'O novo valor de venda sera de R$' + vt
    } else if ((valor >= 50) && (valor < 100)) {
        let porcen = valor * (0.25)
        let vt = valor + porcen
        resposta.innerHTML = 'O novo valor de venda sera de R$' + vt
    } else {
        let porcen = valor * (0.15)
        let vt = valor + porcen
        resposta.innerHTML = 'O novo valor de venda sera de R$' + vt
    }
}

function o13() {
    let valor = Number(document.getElementById('valor').value)

    if (valor <= 75) {
        resposta.innerHTML = 'Você devera pagar este mês R$5'
    } else if ((valor > 75)&&(valor <= 240)) {
        let pa = valor - 75
        let pea = pa * (0.05)
        let vt = pea + 5
        resposta.innerHTML = 'Você devera pagar este mês R$' + vt
    } else {
        let pa = valor - 240
        let pea = pa * (0.10)
        let vt = pea + 5 
        resposta.innerHTML = 'Você devera pagar este mês R$' + vt
    }
}

function o14() {
    let valor = Number(document.getElementById('valor').value)

    if (valor <= 10000) {
        let per = valor * (0.03)
        let vt = per + 1800
        resposta.innerHTML = 'Você recebera este mês R$' + vt
    } else if ((valor > 10000)&&(valor < 30000)) {
        let per = valor * (0.05)
        let vt = per + 1800
        resposta.innerHTML = 'Você recebera este mês R$' + vt
    } else {
        let per = valor * (0.08)
        let vt = per + 1800 
        resposta.innerHTML = 'Você recebera este mês R$' + vt
    }
}
function o15() {
    let quant = Number(document.getElementById('quant').value)
    let combus = document.getElementById('combus').value

    if ((combus === 'a')&&(quant <= 20)) {
        let va = quant * (3.42)
        let des = va * (0.02)
        let vt = va - des
        resposta.innerHTML = quant + ' Litros de Álcool tera que ser cobrado R$' + vt.toFixed(3) 
    } else  if ((combus === 'a')&&(quant > 20)){
        let va = quant * (3.42)
        let des = va * (0.04)
        let vt = va - des
        resposta.innerHTML = quant + ' Litros de Álcool tera que ser cobrado R$' + vt.toFixed(3) 
    }
    
    if ((combus === 'g')&&(quant <= 20)) {
        let va = quant * (5.58)
        let des = va * (0.03)
        let vt = va - des
        resposta.innerHTML = quant + ' Litros de Álcool tera que ser cobrado R$' + vt.toFixed(3) 
    } else  if ((combus === 'g')&&(quant > 20)){
        let va = quant * (5.58)
        let des = va * (0.05)
        let vt = va - des
        resposta.innerHTML = quant + 'Litros de Gasolina tera que ser cobrado R$' + vt.toFixed(3) 
    }
}