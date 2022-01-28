const mongoose = require("mongoose");

const databaseSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
});

const Database = mongoose.model("Database", databaseSchema);

module.exports = Database; 