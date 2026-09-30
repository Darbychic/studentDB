import express from 'express'
const userRouter = express.Router()
import { createUser, loginUser, updateUser, deleteUser, getUser } from '../controller/userController.js'

userRouter.post('/:new-users', createUser)
userRouter.get('/login/:id', loginUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)
userRouter.get('/:id', getUser)

export default userRouter;