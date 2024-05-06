//Aula 02
//Atividade 01
let numero = Number(prompt("Digite o numero:"))
if (numero > 0 && numero %2 === 0){
  console.log(`O numero é positivo e par`)
}else{
  console.log(`O número não positivo e par`)
}

//Atividade 02
let peso = Number(prompt("Qual o seu peso?"))
let altura = Number(prompt("Qual a sua altura?"))
let imc = peso / altura**2
if (imc < 18.5){
  console.log(`Abaixo do peso`)
}else if (imc >= 18.5 && imc < 25){
  console.log(`Peso Normal`)
}else if(imc >= 25 && imc < 30){
  console.log("Sobrepeso")
}else{
  console.log(`Obesidade`)
}

//Atividade 03
let precoProduto = Number(prompt("Qual o preço do produto?"))
let idade = Number(prompt("Qual a sua idade?"))
if (idade <18){
  let desconto = precoProduto * 0.1;
  let precoFinal = precoProduto - desconto;
  console.log(`Você ganhou um desconto de 10% por ser menor de 18 anos! O preço final com desconto é R$${precoFinal.toFixed(2)}`)
}else{
  console.log(`Como você tem 18 anos ou mais, o preço final do produto permanece o mesmo: R$${precoProduto.toFixed(2)}`)
}

//Atividade 04
let letra = (prompt("Digite uma letra"))
if (
  letra === 'a' ||
  letra === 'e' ||
  letra === 'i' ||
  letra === 'o' ||
  letra === 'u' 
){
  console.log(`A letra ${letra} é uma vogal`)
}else{
  console.log(`A letra ${letra} é uma consoante`)
}

//Atividade 05
let dia_numero = Number(prompt("Digite um numero da semana"))
switch (dia_numero) {
  case 1:
    console.log("Segunda-feira")
    break
  case 2:
    console.log("Terça-feira")
    break
  case 3:
    console.log("Quarta-feira")
    break
  case 4:
    console.log("Quinta-feira")
    break
  case 5:
    console.log("Sexta-feira")
    break
  case 6:
    console.log("Sábado")
    break
  case 7:
    console.log("Domingo")
    break
  default:
    console.log("Número inválido. Por favor, digite um número de 1 a 7.")
    break
}