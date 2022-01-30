const mongoose = require("mongoose");

const backendSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
});


const Backend = mongoose.model("Backend", backendSchema);

module.exports = Backend; 