const empresa = require('../models/empresa')

const Empresa = empresa.Empresa

async function salvar(req, res) {
    let empresa = req.body

    let object = {
        nome: empresa.nome,
        email: empresa.email,
        razaoSocial: empresa.razaoSocial,
        cnpj: empresa.cnpj,
        inscricao: empresa.inscricao,
        endereco: empresa.endereco,
        cep: empresa.cep,
        telefone: empresa.telefone,
        site: empresa.site
    }
    
    let result = await new Empresa(object).save()

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: result}))
}

async function alterar(req, res) {
    let empresa = req.body
    
    let object = {
        nome: empresa.nome,
        email: empresa.email,
        razaoSocial: empresa.razaoSocial,
        cnpj: empresa.cnpj,
        inscricao: empresa.inscricao,
        endereco: empresa.endereco,
        cep: empresa.cep,
        telefone: empresa.telefone,
        site: empresa.site
    }

    let result = await Empresa.findByIdAndUpdate({_id: empresa._id}, object)

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: result}))
}

async function listar(req, res) {
    let nome = req.body.searchvalue


    let busca = { nome: { $regex: nome, $options: 'i' } }
    if (nome === '') {
        busca = {}
    } 

    if (!nome) {
        busca = {}
    }

    //db.empresa.find({ nome: { $regex: '', $options: 'i' } })
    let empresas = await Empresa.find(busca)

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({result: empresas}))
}

exports.salvar = salvar
exports.alterar = alterar
exports.listar = listar