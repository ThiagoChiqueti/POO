class Product{
  constructor(name, description, price){
    this.name = name,
    this.description = description,
    this.price = price,
    this.inStock = false
  }

  addToStock(quant){
    this.quantity = quant,
    this.inStock = true
  }

  calculateDiscont(percent){
    const discount = (percent / 100)
    const finalPrice = (this.price - (this.price * discount))
    console.log(`O preço do produto com o desconto aplicado é de ${finalPrice} o desconto foi de ${this.price * discount}`)
  }
}

const car = new Product('porsche', 'Rápido e veloz', 1000000)

console.log(car)

car.addToStock(4)

car.calculateDiscont(20)

console.log(car)