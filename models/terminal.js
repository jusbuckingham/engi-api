const mongoose = require("mongoose");

const terminalCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
});

const terminalSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
    comments: [terminalCommentSchema],
});

const Terminal = mongoose.model("Terminal", terminalSchema);

module.exports = Terminal; 