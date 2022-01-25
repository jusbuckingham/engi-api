const mongoose = require("mongoose");

const backendCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comments: { type: String, required: true },
    date: { type: Date, required: true },
});

const backendSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
    comments: [backendCommentSchema],
});

const Backend = mongoose.model("Backend", backendSchema);

module.exports = Backend; 