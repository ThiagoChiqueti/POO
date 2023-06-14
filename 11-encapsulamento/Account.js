class Account{
  #passWord
  #balance = 0

  constructor(user){
    this.email = user.email,
    this.#passWord = user.passWord
  }
  getBalance(email, passWord){
    if (this.email === email && this.#passWord === passWord){
      return this.#balance
    }else{
      console.log("Usuário ou senha Inválido")
    }

  }

  balanceAdd(value){
    this.#balance += value
    console.log("Valor adicionado")

  }
  

}

const user = {
  email: "tchiqueti@gmail.com",
  passWord: "1234"
}

const myAccount = new Account(user)

console.log(myAccount)
myAccount.balanceAdd(100)
console.log(myAccount.getBalance("tchiqueti@gmail.com", "1234"))