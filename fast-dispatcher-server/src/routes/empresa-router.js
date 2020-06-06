const express = require('express')
const bodyParser = require('body-parser')
const empresaService = require('../service/empresa-service')

const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/listar', empresaService.listar)
router.post('/salvar', empresaService.salvar)
router.post('/alterar', empresaService.alterar)

router.use((err, req, res, next) => {
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.send(JSON.stringify(err))
})

module.exports = router