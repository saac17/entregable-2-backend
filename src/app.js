const express = require('express')

const userRouters = require('./users/users.router')

const port = 9000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok'})
})

app.use('/usersCrud', userRouters)

app.use((req, res) => {
    console.log(req.path)
    res.status(404).json({message:"Not found"})
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

