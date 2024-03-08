const { cpf: cpfValidator } = require('cpf-cnpj-validator')
const CPFException = require('../utils/errors/CPFexception')

class CpfValidator {
    static isValid(cpf) {
        if(!cpf) {
            throw new CPFException('CPF is not provided')
        }
        
        return cpfValidator.isValid(cpf)
    }
}

module.exports = CpfValidator