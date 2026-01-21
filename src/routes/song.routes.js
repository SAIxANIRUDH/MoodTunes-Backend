    const express = require('express');
    const multer = require('multer');
    const router = express.Router();
    const { uploadFile } = require('../service/storage.service.js');
    const songmodel = require("../models/song.model.js");


    const upload = multer({storage: multer.memoryStorage()});


    router.post('/svng',upload.single('audio'),async(req,res)=>{
        if(req.file===undefined){
            return res.status(400).json({message:"No file uploaded"});
        }
        console.log(req.body);
        console.log(req.file);
        const fileData = await uploadFile(req.file);
        const song = await songmodel.create({
            title:req.body.title,
            artist:req.body.artist,
            audio:fileData.url,
            mood:req.body.mood,
        });
        console.log(fileData);
        res.json({message:"Song received"});
    })

    router.get('/svng',async(req,res)=>{
        const {mood} = req.query;

        const songs = await songmodel.find({
            mood:mood,
        });
        res.status(200).json({
            message:"Songs fetched successfully",
            songs
        });

    })


    module.exports = router;