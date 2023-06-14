module.exports = class User{
  
  #passWord
  
  constructor(name, email, passWord){
    this.name = name,
    this.email = email,
    this.#passWord = passWord
  }
}