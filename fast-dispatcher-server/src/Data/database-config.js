/*
Basta instalar o mongo DB no computador onde o node for rodar,
e o mongoose irá criar as coleções, relativas aos modelos, automaticamente, 
assim que os dados e processos forem sendo inseridos.

O nome do banco precisa ser "fast-dispatcher", as configurações de usuario e 
senha, eu deixei padrão na hora da instalação do mongo.
*/
const mongoose = require('mongoose')

let conn = mongoose.connection

// Iniciando o DB
mongoose.connect('mongodb://localhost/fast-dispatcher', {useNewUrlParser: true})


conn.once('open', function() {
    console.log(' --- Database connection ON --- ')
})

conn.on('error', function(err) {
    console.error.bind(console, ' --- Connection error --- \n', err)
})

module.exports = conn