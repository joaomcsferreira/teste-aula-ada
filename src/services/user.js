const UserSchema = require('../schemas/User')
const ConflictException = require('../utils/errors/ConflictException')

class User {
    static async create({ name, email, password, cpf }) {
        const userExists = await UserSchema.findOne({ "cpf": cpf })
        
        if(userExists) {
            throw new ConflictException('CPF já está em uso')
        }

        const { id } = await UserSchema.create({
            name,
            email,
            password,
            cpf
        })

        return { id }
    }
}

module.exports = User