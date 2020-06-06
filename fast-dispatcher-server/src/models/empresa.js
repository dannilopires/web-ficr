const conn = require('../Data/database-config');
const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const EmpresaSchema = new Schema({
    nome: String,
    email: String,
    razaoSocial: String,
    cnpj: String,
    inscricao: String,
    endereco: String,
    cep: String,
    telefone: String,
    site: String
}, { versionKey: false})

const Empresa = conn.model('empresa', EmpresaSchema);

exports.Empresa = Empresa