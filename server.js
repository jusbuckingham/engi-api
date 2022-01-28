const express = require("express");
const { User, Terminal, Frontend, Backend, Database } = require("./models");
const app = express();
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();
require('./config/passport')(passport);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// controllers
const users = require('./controllers/users');
const { request, response } = require("express");
const res = require("express/lib/response");

const backend = require('./controllers/backend');
const frontend = require('./controllers/frontend');
const database = require('./controllers/database');
const terminal = require('./controllers/terminal');


// routes
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Engi!"
    });
});

app.get("/users", async (request, response) => {

    try {
        const usersArray = await Users.find({});
        response.json({ usersArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/terminal", async (request, response) => {

    try {
        const terminalArray = await Terminal.find({});
        response.json({ terminalArray });
    } catch (error) {
        response.status(500).send(error);
    }

});

app.get("/frontend", async (request, response) => {

    try {
        const frontendArray = await Frontend.find({})
        response.json({ frontendArray });
    } catch (error) {
        response.status(500).send(error);
    }
})

app.get("/backend", async (request, response) => {

    try {
        const backendArray = await Backend.find({});
        response.json({ backendArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/database", async (request, response) => {

    try {
        const databaseArray = await Database.find({});
        response.json({ databaseArray });
    } catch (error) {
        response.status(500).send(error);
    }
});






//import controllers
app.use('/users', require('./controllers/users'));
app.use('/terminal', require('./controllers/terminal'));
app.use('/frontend', require('./controllers/frontend'));
app.use('/backend', require('./controllers/backend'));
app.use('/database', require('./controllers/database'));



app.use('/users', users);
app.use('/terminal', terminal);
app.use('/frontend', frontend);
app.use('/backend', backend);
app.use('/database', database);


app.listen(process.env.PORT || 3000, () => {
    console.log("We're jammin' on port 3000 🎧")
});