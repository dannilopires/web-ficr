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