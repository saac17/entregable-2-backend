//? Dependencies
const router = require('express').Router()

//? File imports
const userServices = require('./users.services')

//? Get
router.get('/users', userServices.getAllUsers)
//? Get/:id
router.get('/users/:id', userServices.getUserBId)
//? Post/
router.post('/users', userServices.postNewUser)
//? Put
router.put('/users/:id', userServices.putUser)
//? Delete
router.delete('/users/:id', userServices.deleteUser)

module.exports = router