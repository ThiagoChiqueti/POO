const Persona = require('./Persona.js')

class Thief extends Persona{
  constructor(name, life, attack, defense){
    super(name, life, attack, defense),
    this.type = 'thief'
  }
  
  damage(name){
    const damageTeken = (this.attack - name.defense) * 2
    name.life = name.life - damageTeken
  }
}

module.exports = Thief