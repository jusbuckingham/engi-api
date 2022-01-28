require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Frontend } = require('../models')
const { FrontendComments } = require('../models')


router.get("/", async (request, response) => {

    console.log(request.body)
    response.send('ok');

    try {
        const frontendArray = await Frontend.find({});
        response.json({ frontendArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const newComment = await Frontend.insertMany({
            comments: request.body.comments,
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;