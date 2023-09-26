let bcrypt = require('bcrypt')
let jwt    = require('jsonwebtoken')

module.exports = {
    register: (req, res) => {
        //Params
        var email    = req.body.email
        var username = req.body.username
        var password = req.body.password
        var bio      = req.body.bio

        if (email == null || username == nul || password == null) {
            return res.status(400).json({'error': 'missing parameters'})
        }
    },
    login: (req, res) => {
        //
    }
    
}