const UserService = require('../services/user')
const CheckPassword = require('../utils/check-password')
const CpfValidator = require('../utils/cpf-validator')
const CPFException = require('../utils/errors/CPFexception')

class UserController {
    static async create(req, res) {
        try {
            const { name, cpf, email, password, confirmPassword } = req.body
    
            if(!CpfValidator.isValid(cpf)) {
                throw new CPFException('CPF Inválido' )
            }
            
            if(!CheckPassword.match(password, confirmPassword)) {
                throw { status: 400, message: 'As senhas não conferem' }
            }

            const user = await UserService.create({
                name, 
                cpf, 
                email,
                password, 
                confirmPassword
            })
            
            res.status(200).json(user)
        } catch (error) {
            console.log(error.status)
            res.status(error.status || 500).json(error?.message || error)
        }
    }
}

module.exports = UserController