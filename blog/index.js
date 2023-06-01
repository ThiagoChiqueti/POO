const Author = require("./Author");

const thiago = new Author('Thiago')

const postado = thiago.createPost('Desenvolvimento Pessoal', 'Para se desenvolver é estritamente necessário estudar')
const stage = thiago.createPost('Rvolução', 'Para se desenvolver é estritamente necessário estudar')

console.log(thiago)
console.log(stage)

postado.coment('Guilherme', 'Teste concluido co sucesso' )
postado.coment('Thiago', 'Teste concluido co sucesso' )
postado.coment('Lu', 'Teste concluido co sucesso' )

console.log(postado)