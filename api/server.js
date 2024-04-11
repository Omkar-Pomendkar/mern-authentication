import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Conected to Mongo BD")
})
.catch((err)=>{
    console.log(err);
})
const app = express();

const port = 3000;

app.listen(port, ()=> {
    console.log(`Server is listening on Port ${port}`)
})

app.use("/api/user", userRoutes);