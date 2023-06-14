const User = require("./User");
const readline = require('readline'). createInterface({
  input: process. stdin,
  output: process. stdout
  })


function createUser(){
  readline. question(`What's your name?`, name => {
  console. log(`Hi ${name}!`)
  const pass = prompt("Digite uma Senha")
  const mail = prompt("Digite seu email")
  const user = new User(name, pass, mail)
}

do{
  let option = prompt(`
  1. Criar novo usuário
  2. Depositar
  3. Efetuar compra
  4. Sair`)

  switch (option) {
    case "1":
      createUser()
      break;
    case "2":
      
      break;
    case "3":
      
      break;
  
    default:
      break;
  }

}while(option != 4)