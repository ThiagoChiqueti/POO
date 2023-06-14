class User{
  #pass
  #credit

  constructor(name, pass, mail){
    this.name = name,
    this.#pass = pass,
    this.mail = mail,
    this.#credit = 0
  }

  addCredit(quantity){
    this.#credit += quantity
    console.log(`Depósito efetuado com sucesso: R$ ${quantity}`)
  }

  removeCredit(quantity){
    this.#credit -= quantity
    console.log(`Compra efetuada com sucesso: R$ ${quantity}`)
  }
  
}

module.exports = User