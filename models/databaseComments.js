const mongoose = require("mongoose");

const databaseCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comments: { type: String, required: true },
    date: { type: Date, required: true },
});

const Database = mongoose.model("Database Comments", databaseCommentSchema);

module.exports = Database; 