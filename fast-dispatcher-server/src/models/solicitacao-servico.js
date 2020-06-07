const conn = require('../Data/database-config');
const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const SolicitacaoServicoSchema = new Schema({
    empresa: Schema.Types.ObjectId,
    despachante: Schema.Types.ObjectId,
    tipoDocumento: String, //Habite-se, Planta Projeto, IPTU, Matricula Imovel, ISS
    endereco: String,
    dataServico: { type: Date, default: Date.now },
    formaPagamento: String,
    valor: Schema.Types.Decimal128
}, { versionKey: false })

const SolicitacaoServico = conn.model('solicitacaoServico', SolicitacaoServicoSchema);

exports.SolicitacaoServico = SolicitacaoServico