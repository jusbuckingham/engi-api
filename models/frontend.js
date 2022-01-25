const mongoose = require("mongoose");

const frontendCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
});

const frontendSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    notes: { type: String, required: true },
    comments: [frontendCommentSchema],
});


const Frontend = mongoose.model("Frontend", frontendSchema);

module.exports = Frontend; 