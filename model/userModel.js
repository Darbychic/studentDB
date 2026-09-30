import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id : {type: String, required : true, unique : true}, 
    name : {type: String, required : true},
    userClass : {type: String, required : true},
    gender : {type: String, required : true}
})

const userModel = mongoose.model('user', userSchema)
export default userModel

