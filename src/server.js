
const express = require('express') // importar das dependências
const path = require('path')
const pages = require('./pages.js')


//iniciando o EXPRESS
const server = express()

server
//Utilizando os arquivos estáticos
.use(express.static('public'))// O express vai criar todas as rotas dos arquivos estatic

//configurar Template Engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// criar uma rotas

.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

// ligar o servidor
server.listen(5500)