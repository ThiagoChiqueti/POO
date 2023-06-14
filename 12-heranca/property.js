class Property{
  constructor(area, price){
    this.area = area,
    this.price = price
  }
  getPricePerSquareMeter(){
    return this.price / this.area
  }
}

class House extends Property {}

const land = new Property(200, 50000)
const house = new House(600, 80000)

console.log(land, house)
console.log(land.getPricePerSquareMeter(), house.getPricePerSquareMeter())

class Apart extends Property {
  constructor(number, area, price){
    super(area, price)
    this.number = number
  }

  getFloor(){
    return `Apartamento no andar: ${this.number.slice(0, -2)}`
  }
}

const apt = new Apart('201', 100, 160000)

console.log(apt)

console.log(apt.getFloor())