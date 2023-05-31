class User{
  constructor(name, email, password ){
    this.fullName = name,
    this.email = email,
    this.password = password
    this.log = false
  }

  login(email, password){
    if (this.email == email && this.password == password){
    this.log = true
    console.log(`Usuário logado!`)
  }else{
    console.log(`Usuário ou senha inválidos`)
  }
  }
}

const thiago = new User('Thiago', 'tchiqueti@gmail.com', 'altF4')
console.log(thiago)

thiago.login('tchiqueti@gmail.com', 'altF4')

console.log(thiago)