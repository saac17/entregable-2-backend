const usersDB = []
let id = 1

//?Para tener idea de lo que se tiene que guardar
// {
//     id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

//? Para buscar todos los usuarios
const findAllUsers = () => {
    return usersDB
}

//? Para buscar el usuario por el id
const findUserById = (id) => {
    const filteredUser = usersDB.find(user => user.id == id)
    return filteredUser
}

//? Para la creacion de un nuevo usuario
const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
	    last_name: obj.last_name,
	    email: obj.email,
	    password: obj.password,
	    birthday: obj.birthday 
    }
    usersDB.push(newUser)
    return newUser
}

//?Actualiza los usuarios
const updateUser = (id, obj) => {
    if(findUserById(id)){
        const userIndex = usersDB.findIndex(user=>user.id==id)
        usersDB.splice(userIndex, 1, {
            id: Number(id),
            first_name: obj.first_name,
            last_name: obj.last_name,
            email: obj.email,
            password: obj.password,
            birthday: obj.birthday 
        })
        return {message: "User updated successfully"}
    }else {
        return {message: `User with id: ${id} not found`}
    }
}

//? Borra los usuarios
const dropUser = (id) => {
    if(findUserById(id)){
        const userIndex = usersDB.findIndex(user=>user.id==id)
        usersDB.splice(userIndex, 1)
        return {message: "User deleted!"}
    }else{
        return {message: `User with id: ${id} not found`}
    }
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    updateUser,
    dropUser
}

