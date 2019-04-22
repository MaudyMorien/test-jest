const axios = require('axios')

class Users {
    static async all() {
        let result = await axios.get('http://localhost:3000/users')
        return result
    }
}

module.exports = Users