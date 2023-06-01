const Post = require("./post.js")

class Author{
  constructor(name){
    this.name = name,
    this.posts = []
  }
  createPost(title, text){
    this.posts.push(title)
    const testando = new Post(title, text, this.name)
    return testando
  }
}

module.exports = Author