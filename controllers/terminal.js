require('dotenv').config();
const express = require('express');
const router = express.Router();
const { Terminal } = require('../models')


router.get("/", async (request, response) => {

    console.log(request.body)
    response.send('ok');

    try {
        const terminalArray = await Terminal.find({});
        response.json({ terminalArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/", async (request, response) => {
    try {

        response.send('ok')
        console.log(request.body)

        const newNote = await Terminal.insertMany({
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

        const editNote = await Terminal.updateOne({
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

        const deleteNote = await Terminal.remove({
            subject: request.body.subject,
            notes: request.body.notes
        })
    }
    catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;