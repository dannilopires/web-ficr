const solicitacaoServico = require('../models/solicitacao-servico')
const mongoose = require('mongoose')
const moment = require('moment')

const SolicitacaoServico = solicitacaoServico.SolicitacaoServico

async function solicitarServico(req, res) {
    let solicitacaoServico = req.body

    let object = {
        empresa: solicitacaoServico.empresa,
        despachante: solicitacaoServico.despachante,
        tipoDocumento: solicitacaoServico.tipoDocumento,
        endereco: solicitacaoServico.endereco,
        formaPagamento: solicitacaoServico.formaPagamento,
        valor: parseFloat(solicitacaoServico.valor)
    }
    
    let result = await new SolicitacaoServico(object).save()

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: result}))
}

async function consultarServicos(req, res) {
    let consultaServico = req.body

    let servicos = await SolicitacaoServico.find(
        {
            empresa: mongoose.Types.ObjectId(consultaServico.empresa),
            dataServico: 
                {
                    $gte: moment(consultaServico.dataInicio).startOf('day'), 
                    $lt: moment(consultaServico.dataFim).endOf('day')
                }
        }
    )

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: servicos}))
}

exports.solicitarServico = solicitarServico
exports.consultarServicos = consultarServicos