class Persona{
  constructor(name, life, attack, defense){
    this.name = name,
    this.life = life,
    this.attack = attack,
    this.defense = defense
  }
  damage(name){
    const damageTeken = this.attack - name.defense
    name.life = name.life - damageTeken
  }
}

module.exports = Persona
