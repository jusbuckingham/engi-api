const mongoose = require("mongoose");

const terminalCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
});

const TerminalComments = mongoose.model("Terminal Comments", terminalCommentSchema);

module.exports = TerminalComments; 