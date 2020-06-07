const express = require('express')
const bodyParser = require('body-parser')
const solicitacaoServicoService = require('../service/solicitacao-servico-service')

const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/solicitarservico', solicitacaoServicoService.solicitarServico)
router.get('/consultarservicos', solicitacaoServicoService.consultarServicos)

router.use((err, req, res, next) => {
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.send(JSON.stringify(err))
})

module.exports = router