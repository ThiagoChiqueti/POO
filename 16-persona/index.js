const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const thiago = new Mage('Thiago', 90,4 ,2 ,14)
const zara = new Thief('Zara', 140, 22, 81)
const coder = new Warrior('Coder', 200, 14, 12, 4)

console.table({thiago, zara, coder})

coder.changePosition()

console.table({thiago, zara, coder})