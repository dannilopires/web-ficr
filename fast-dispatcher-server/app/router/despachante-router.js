const express = require('express')
const bodyParser = require('body-parser')
const despachanteService = require('../service/despachante-service')

const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/listar', despachanteService.listar)
router.post('/salvar', despachanteService.salvar)
router.post('/alterar', despachanteService.alterar)

router.use((err, req, res, next) => {
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.send(JSON.stringify(err))
})

module.exports = router