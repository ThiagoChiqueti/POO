const Persona = require('./Persona.js')

class Warrior extends Persona{
  constructor(name, life, attack, defense, shield){
    super(name, life, attack, defense)
    this.position = 'attack',
    this.shield = shield,
    this.type = 'Warrior'
  }
  damage(name){
    if (this.position === 'attack'){
    const damageTeken = this.attack - name.defense
    name.life = name.life - damageTeken
    }else{
      console.log('Posição de defesa espero o próximo turno')
    }
  }
  changePosition(){
    if (this.position === 'attack'){
      this.position = 'defense'
      this.defense += this.shield
    }else{
      this.position = 'attack'
      this.defense -= this.shield
    }
  }

}

module.exports = Warrior