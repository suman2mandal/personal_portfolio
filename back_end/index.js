import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {Award} from "./models/awards.model.js";
try{
    dotenv.config();
    const app = express();
    const PORT = process.env.PORT || 5000;
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const uri = process.env.ATLAS_URI;
    (async ()=>{
        try{
            await mongoose.connect(uri)
            const connection = mongoose.connection;
            console.log("MongoDB database connection established successfully");
        }catch(err){
            console.log(err,"error connecting to database");
        }
    })();


    app.get('/', async (req, res) => {
        const alltodo = await Award.find();
        res.send(alltodo);
    })

    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}catch(err){
    console.log(err,"error in index.js");
}