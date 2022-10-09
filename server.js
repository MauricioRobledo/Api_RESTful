const express = require('express')
const productRouter = require('./routes/products')

const app = express ()

const PORT = 8080



const server = app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto 8080")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/productos", productRouter)