const despachante = require('../models/despachante')

const Despachante = despachante.Despachante

async function salvar(req, res) {
    let despachante = req.body

    let object = {
        nome: despachante.nome,
        email: despachante.email,
        cnh: despachante.cnh,
        cpf: despachante.cpf,
        endereco: despachante.endereco,
        cep: despachante.cep,
        telefone: despachante.telefone
    }
    
    let result = await new Despachante(object).save()

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: result}))
}

async function alterar(req, res) {
    let despachante = req.body
    
    let object = {
        nome: despachante.nome,
        email: despachante.email,
        cnh: despachante.cnh,
        cpf: despachante.cpf,
        endereco: despachante.endereco,
        cep: despachante.cep,
        telefone: despachante.telefone
    }

    let result = await Despachante.findByIdAndUpdate({_id: despachante._id}, object)

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: result}))
}

async function listar(req, res) {
    let nome = req.body.searchValue

    let busca = { nome: { $regex: nome, $options: 'i' } }
    if (nome === '') {
        busca = {}
    } 

    let despachantes = await Despachante.find(busca)

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: despachantes}))
}

exports.salvar = salvar
exports.alterar = alterar
exports.listar = listar