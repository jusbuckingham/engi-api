const mongoose = require("mongoose");

const frontendSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
});


const Frontend = mongoose.model("Frontend", frontendSchema);

module.exports = Frontend; 