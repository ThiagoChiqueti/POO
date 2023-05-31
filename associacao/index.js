const Person = require("./Person");
const Adress = require("./adress");

const addr = new Adress("Luiza fernades da conceição", 78, "Palmas", "CGR", "SC")
const thiago = new Person('Thiago', addr)

console.log(thiago)

console.log(thiago.adress.fullAdress())