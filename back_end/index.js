import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {Award} from "./models/awards.model.js";
import {Project} from "./models/projects.model.js";
import {Skills} from "./models/skills.model.js";
import {Certificates} from "./models/certificates.model.js";
import {Blogposts} from "./models/blogposts.model.js";
import {Education} from "./models/education.model.js";
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

    app.get('/Award', async (req, res) => {
        const allawards = await Award.find();
        res.send(allawards);
    })
    app.get('/Education', async (req, res) => {
        const alleducations = await Education.find();
        res.send(alleducations);
    })
    app.get('/Projects', async (req, res) => {
        const allprojects = await Project.find();
        res.send(allprojects);
    })
    app.get('/Skills', async (req, res) => {
        const allskills = await Skills.find();
        res.send(allskills);
    })
    app.get('/Certificates', async (req, res) => {
        const allcertificates = await Certificates.find();
        res.send(allcertificates);
    })
    app.get('/BlogPosts', async (req, res) => {
        const alltodo = await Blogposts.find();
        res.send(alltodo);
    })

    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}catch(err){
    console.log(err,"error in index.js");
}