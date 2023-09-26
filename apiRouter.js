let express   = require('express')
let usersCtrl = require('./routes/usersCtrl')

//Router
exports.routeur = ( () => {
    let apiRouteur = express.Router()

    //Users Route
    apiRouteur.route('/users/register/').post(usersCtrl.register)
    apiRouteur.route('users/login/').post(usersCtrl.login)

    return apiRouteur
})()
