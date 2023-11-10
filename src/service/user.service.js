const connection = require('../app/database')

class UserService {
    async create(user) {
        const { name, password } = user
        const statement = 'INSERT INTO `admin` (username, password) VALUES (?, ?);'
        const [result] = await connection.execute(statement, [name, password])
        return result
    }
    async findUserByUsername(name) {
       const statement = 'SELECT * FROM `admin` WHERE username = ?'
       const [result] = await connection.execute(statement, [name])
       return result
    }
}



module.exports = new UserService();