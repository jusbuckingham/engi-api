const mongoose = require("mongoose");

const terminalSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
});

const Terminal = mongoose.model("Terminal", terminalSchema);

module.exports = Terminal; 