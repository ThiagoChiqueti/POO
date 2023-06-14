const Persona = require('./Persona.js')

class Mage extends Persona{
  constructor(name, life, attack, defense, magic){
    super(name, life, attack, defense)
    this.magic = magic,
    this.type = 'Mage'
  }
  damage(name){
    const damageTeken = (this.attack - name.defense) + this.magic
    name.life = name.life - damageTeken
  }

  heal(name){
    const heal = 2 * this.magic
    name.life = name.life + heal
  }
}

module.exports = Mage