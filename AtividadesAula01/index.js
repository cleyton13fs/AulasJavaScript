//Aula 01
//Atividade 01
let seuNome = prompt("Digite seu nome")
console.log(`Olá ${seuNome}, seja bem vindo!`)

// Atividade 02
let numero01 = Number(prompt("Digite o primeiro numero"))

let numero02 = Number(prompt("Digite o segundo numero"))

let soma = numero01 + numero02
console.log(`A soma dos numeros é: ${soma}`)

//Atividade 03
let idade = Number(prompt("Digite sua idade"))
let anoAtual = new Date().getFullYear()
let anoNascimento = anoAtual - idade
console.log(`Você nasceu no ano de: ${anoNascimento}`)

//Atividade 04
let raio = Number(prompt("Digite o valor do raio"))
let pi = 3.141592
let area = pi * raio **2
console.log(`A área do seu círculo é:${area.toFixed(2)}m²`)

//Atividade 05
let dolar = Number(prompt("Digite quanto você tem em dólar"))
let cotacaoEuro = 0.85
let dolarEmEuro = dolar * cotacaoEuro
console.log(`com U$${dolar} você pode comprar €${dolarEmEuro}`)

//Atividade 06
let precoProduto = Number(prompt("Qual o preço do produto?"))
let desconto = 0.1
let novoPreco = precoProduto - (precoProduto * desconto)
console.log(`O preço era:R$${precoProduto} com o desconto ficou:R$${novoPreco}`)

//Atividade 07
let metros = Number(prompt("Digite a quantidade em metros:"))
let centimetros = metros * 100
console.log(`${metros} metros equivale a ${centimetros} centímetros`)

//Desafio Aula 01
let ganhoPorHora = Number(prompt("Digite quanto você ganha por hora:"))
let horasTrabalhadasMes = Number = Number(prompt("Digite quantas horas trabalhadas no mês:"))
let salario = ganhoPorHora * horasTrabalhadasMes
let impostoDeRenda = salario * 0.11
let descontoINSS = salario * 0.08
let descontoSindicato = salario * 0.05
let salarioComDescontos = salario - impostoDeRenda - descontoINSS - descontoSindicato
let totalDescontos = impostoDeRenda + descontoINSS + descontoSindicato

console.log(`No mês referido, com um salário bruto de R$${salario}, foram descontados R$${impostoDeRenda} para o Imposto de Renda, R$${descontoINSS} para o INSS e R$${descontoSindicato} para o sindicato, totalizando um desconto total de R${totalDescontos.toFixed(2)}. Após os descontos, o salário líquido foi de R$${salarioComDescontos}`)