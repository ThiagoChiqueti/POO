class Book {
  constructor(title, pages, author){
    this.title = title,
    this.pages = pages,
    this.author = author,
    this.published = false
  }
  publish(){
    this.published = true
  }
}

const eragon = new Book('eragon', 500, 'Thiago Chiqueti')
const eldest = new Book('eldest', 400, 'Thiago Chiqueti')

eragon.publish()

console.log(eragon)
console.log(eldest)