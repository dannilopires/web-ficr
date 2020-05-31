const conn = require('./config/database-config')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const despachanteSchema = new Schema({
    nome: String,
    email: String,
    cnh: String,
    cpf: String,
    endereco: String,
    cep: String,
    telefone: String
}, { versionKey: false})

const Despachante = conn.model('Despachante', despachanteSchema, 'despachante')

exports.Despachante = Despachante