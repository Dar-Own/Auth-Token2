const express    = require('express')
const bodyParser = require('body-parser')
const server     = express()
const port       = 8080
let apiRouter    = require('./apiRouter').routeur 

//Body Parser
server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

//routes
server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send('<h1>Bienvenu sur le serveur !</h1>')
})

server.use('api/', apiRouter)

//Launch Server
server.listen(port, () => {console.log('écoute sur le port ' + port)})