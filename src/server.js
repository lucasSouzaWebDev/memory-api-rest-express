const port = 3003

const express = require('express')
const app = express()
const productRoutes = require('./routes/products')
const createProductsTask = require('./schedule/createProducts')

app.use("/produtos", productRoutes)
createProductsTask.execTask()

app.listen(port, () => console.log(`Server is running on http://localhost:${port}.`))