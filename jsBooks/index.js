const App = require('./App')

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthors()

app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('A Sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O Ladrão de Raios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A Pirâmide Vermelha', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

app.createPoster('Senhor dos anéis', '...', '2 metros', '1.5 metros', 59.99, 10)

const books = app.getBooks()
const poster = app.getPosters()

app.createUser('Thiago', 'tchiqueti@gmail.com', '123456')
app.createUser('Lu', 'sadasd@gmail.com', '123456')

const users = app.getUsers()

app.showDatabase()

const items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
]
const items2 = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: poster[0],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
]

app.createOrder(items, users[0])
app.createOrder(items2, users[1])

app.showDatabase()