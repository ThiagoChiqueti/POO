const Coment = require("./Coment")

class Post{
  constructor(title, text, author){
    this.title = title,
    this.text = text,
    this.comments = []
    this.author = author
  }
  coment(author, text){
    this.comments.push(new Coment(author, text))
  }
}

module.exports = Post