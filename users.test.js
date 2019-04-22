const axios = require('axios')
const Users = require('./users')

jest.mock('axios')

test('should fetch users', () => {

    const users = [{
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    }, {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    }]

    const response = { data : users }
    axios.get.mockImplementation(() => Promise.resolve(response))
    Users.all().then(response => expect(response.data).toEqual(users))
})