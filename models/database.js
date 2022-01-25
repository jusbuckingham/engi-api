const mongoose = require("mongoose");

const databaseCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comments: { type: String, required: true },
    date: { type: Date, required: true },
});

const databaseSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
    comments: [databaseCommentSchema],
});

const Database = mongoose.model("Database", databaseSchema);

module.exports = Database; 