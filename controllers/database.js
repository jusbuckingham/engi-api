require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Database } = require('../models')


router.get("/", async (request, response) => {

    console.log(request.body)
    response.send('ok');

    try {
        const databaseArray = await Database.find({});
        response.json({ databaseArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/new", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const newNote = await Database.insertMany({
            subject: request.body.subject,
            notes: request.body.notes
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;