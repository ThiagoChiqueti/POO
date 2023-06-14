const Accont = require("./Account")

module.exports = class User{
  constructor(email, fullName){
    this.email = email,
    this.fullName = fullName
    this.account = new Accont(this)
  }
}