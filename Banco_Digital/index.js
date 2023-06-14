const App = require('./App')

App.createUser('tchiqueti@gmail.com', 'Thiago Chiqueti')
App.createUser('gmilhass@gmail.com', 'Guilherme Rodrigues')
App.createUser('luisRodrigues@gmail.com', 'Luis Rodrigues')

App.deposit('tchiqueti@gmail.com', 100)

App.transfer('tchiqueti@gmail.com', 'gamilhass@gmail.com', 20)

App.changeLoanFee(10)
App.takeLoan('luisRodrigues@gmail.com', 2000, 24)

console.log(App.findUser('tchiqueti@gmail.com'))
console.log(App.findUser('tchiqueti@gmail.com').account)

console.log(App.findUser('gmilhass@gmail.com'))
console.log(App.findUser('gmilhass@gmail.com').account)

console.log(App.findUser('luisRodrigues@gmail.com'))
console.log(App.findUser('luisRodrigues@gmail.com').account)