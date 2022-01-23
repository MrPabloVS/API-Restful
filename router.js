const express = require('express')
const {Router} = express
const multer = require('multer')

const router = new Router()

const fs = require("fs")
const db = fs.readFileSync("productos.json")


router.get('/', (req, res) => {
    res.send(db)
})

router.get('/:id', (err, req, res, next) => {
    res.status(404).send('Producto no encontrado')
    res.send(db.req.params)
})

router.post('/', (req, res) => {
    res.send({
        title: nombreDelProducto,
        price: 123,
        img: '#',
        id: db.length = 1
    })
})

router.put('/:id', (err, req, res, next) => {
    res.status(404).send('Producto no encontrado')
    res.send({
            title: nombreDelProducto,
            price: 123,
            img: '#',
            id: req.params
        })
})

router.delete('/:id', (err, req, res, next) => {
    res.status(404).send('Producto no encontrado')
    res.send(`Producto de id: ${req.params} eliminado`)
})