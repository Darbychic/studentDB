import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt'

const createUser = async (req, res) => {
    try {
        const {id, name, userClass, gender} = req.body
        const user = await userModel.create({
            id, name, userClass, gender
        })
    res.status(200).json({
        message : "User created successfully",
        data : user
    })
    }catch (error) {
        res.status(400).json({message : "Error creating user", error: error.message})
    }
}

const loginUser = async (req, res) => {
    try{
        const {id, name} = req.body
        const user = await userModel.findOne({id})
        if (!user){
            return res.status(404).json({message : "User not found, please sing up!", error : error.message})
        }
        return res.status(200).json({message: "Login successfully!"})
    }catch (error) {
        return res.status(500).json({message : error.message})
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const {name, userClass, gender} = req.body
        const user = await userModel.findOneAndUpdate(
            {id : id},
            {name}, {userClass}, {gender}
        )
        if (user){
            return res.status(200).json({
                message :"User updated sucessfully"
            })
        }else {
            return res.status(404).json({
                message : "Student not found"
            })
        }
    }catch (error){
        return res.status(400).json({
            message : "Error updating student",
            error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try{
        const {id} = req.params
        const user = await userModel.findOneAndDelete({id})
        if (user) {
            return res.status(200).json({
                message : "User deleted successfully",
                data: user
            })
        }
    }catch (error){
        return res.status(400).json({message: "Error deleting user", error: error.message})
    }
}

const getUser = async (req, res) => {
    try{
        const {id} = req.params
        const user = await userModel.findOne({id})
        if (!user) {
            return res.status(404).json({message: "User not found!"})
        }
        return res.status(200).json({message : "User retrieved successfully", data : user})
    }catch(error){
        return res.status(400).json({
            message: "Error retrieving user",
            error: error.message
        })
    }
}
export {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getUser
}
