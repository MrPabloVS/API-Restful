const express = require('express')
const {Router} = express
app.use(express.urlencoded({extended: true}))

const app = express()

const {router} = require('router.js')



app.use('/api/productos', router)
app.use('/static', express.static(__dirname + '/public'))

app.listen(8080)