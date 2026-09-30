import express, { response } from 'express';
import mongoose from 'mongoose'
import userRouter from './route/userRoute.js';

const compass_string = "mongodb://localhost:27017/darby"
const atlas_string = "mongodb+srv://darbychic26_db_user:darby@cluster0.ntc6c3h.mongodb.net/?appName=Cluster0"

import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.connect(atlas_string)
    .then (() => console.log ("Mongo connected"))
    .catch(err => console.log("Mongo connection error", err))

const app = express();
const port = 5555;

app.use(express.json())

app.get('/', (req, res ) => {
    res.send('Server is running')
})

app.use('/:users',userRouter)
app.listen (port, () => {
    console.log(`server is on and running on port ${port}`);

});