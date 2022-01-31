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

router.post("/", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const newNote = await Backend.insertMany({
            subject: request.body.subject,
            notes: request.body.notes
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

router.put("/edit", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const editNote = await Backend.updateOne({
            subject: request.body.subject,
            notes: request.body.notes
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

router.delete("/delete", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const deleteNote = await Backend.remove({
            subject: request.body.subject,
            notes: request.body.notes
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;