require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Backend } = require('../models')


router.get("/", async (request, response) => {

    console.log(request.body)
    response.send('ok');

    try {
        const backendArray = await Backend.find({});
        response.json({ backendArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const newComment = await Backend.insertMany({
            comments: request.body.comments,
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;