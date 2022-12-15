//? File imports
const userControllers = require('./users.controllers')

//? Se encarga de mostrar todos los usuarios
const getAllUsers = (req, res) => {
    if(req.body){
        const allUsers = userControllers.findAllUsers()
        res.status(200).json(allUsers)
    }
}
//? Muestra todos lo usuario por el id
const getUserBId = (req, res) => {
    const id = req.params.id
    const user = userControllers.findUserById(id)
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json({message: "User does not exists"})
    }
}

//? Hace la publicacion de un nuevo usuario y de la cual todos los datos, menos el cumples, son obligatorios
const postNewUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    if(first_name && last_name && email && password && birthday){
        const newUser = userControllers.createNewUser(req.body)
        res.status(201).json(newUser)
    }else{
        res.status(404).json({
            message: "Invalid Data",
            fields: {
                first_name: 'string*',
    	        last_name: 'string*',
    	        email: 'string*',
    	        password: 'string*',
    	        birthday: 'YYYY/MM/DD'
            }
        })
    }
}

//? Esta actualiza o cambia los campos de los usuarios existentes
const putUser = (req, res) => {
    const id = req.params.id
    const {first_name, last_name, email, password, birthday} = req.body
    if(first_name && last_name && email && password && birthday){
        const newUser = userControllers.updateUser(id, req.body)
        res.status(200).json(newUser)
    }else{
        res.status(404).json({
            message: "Invalid Data",
            fields: {
                first_name: 'string*',
    	        last_name: 'string*',
    	        email: 'string*',
    	        password: 'string*',
    	        birthday: 'YYYY/MM/DD'
            }
        })
    }
}

//? Borra el usuario existente en de la api
const deleteUser = (req, res) => {
    const id = req.params.id
    if(id){
        const response = userControllers.dropUser(id)
        res.status(200).json(response)
    }
}


module.exports = {
    getAllUsers,
    getUserBId,
    postNewUser,
    putUser,
    deleteUser
}