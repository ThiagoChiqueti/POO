class Veichle{
  move(){
    console.log('O veículo esta se movendo')
  }
}

class Car extends Veichle{
  move(){
    console.log('O carro está se movendo')
  }
}

class Ship extends Veichle{
  move(){
    console.log('O Navio está Navegando')
  }
}

class AirCraft extends Veichle{
  move(speed){
    console.log(`O avião decolou ${speed}`)
  }
}

const corsa = new Car()
const catamara = new Ship()
const jato = new AirCraft()

//corsa.move()
//catamara.move()
//jato.move(100)

function start(veichle){
  console.log('Iniciando um veículo')
  veichle.move()
}

start(corsa)
start(catamara)
start(jato)