const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const despachanteRouter = require('./src/routes/despachante-router')
const empresaRouter = require('./src/routes/empresa-router')

//Iniciando o App
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/rest/despachante', despachanteRouter)
app.use('/rest/empresa', empresaRouter)

app.listen(9000, () => console.log('Express started at http://localhost:9000'))