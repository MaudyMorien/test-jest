const Users = require('./users')

async function showData() {
    let result = await Users.all()
    console.log(result.data)
}

showData()
console.log('finished')

