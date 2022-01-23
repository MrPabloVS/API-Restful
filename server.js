const express = require('express')
const {Router} = express
app.use(express.urlencoded({extended: true}))
const {router} = require('router.js')
const fs = require("fs")

const app = express()
const db = fs.readFileSync("productos.json")
const usableId = db.length + 1

let newFileContent = []



// Rutas
app.use('/api/productos', router)
app.use('/static', express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(8080)

// Set Storage
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, 'producto-' + usableId )
    }
})

let upload = multer({storage: storage})

//Funcion para actualizar productos.json
function updateProducts() {
    fs.readFile(`/uploads/producto${db.length}`, (err, contenido) => {
        if(err){console.log('error al leer archivo')}
        else{
            newFileContent = contenido
        }
    })
    fs.appendFile('/productos.json', newFileContent.json, err =>{
        if(err){console.log('error al actualizar')}
        else{console.log('actualizacion exitosa')}
    })
}

// Subida de Archivo
app.post('/uploadfile', upload.single('inputProducto'), (req, res, next) => {
    const file = req.file
    if(!file){
        const error = new Error('Archivo no detectado')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
}).then(updateProducts())

