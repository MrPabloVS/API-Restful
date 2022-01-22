const express = require('express')
const {Router} = express
app.use(express.urlencoded({extended: true}))

const app = express()
const router = new Router()

router.get('/', (req, res) => {
    res.send()
})

router.get('/:id', (req, res) => {
    res.send()
})

router.post('/', (req, res) => {
    res.send()
})

router.put('/:id', (req, res) => {
    res.send()
})

router.delete('/:id', (req, res) => {
    res.send()
})

app.use('/api/productos', router)

app.listen(8080)