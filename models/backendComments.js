const mongoose = require("mongoose");

const backendCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comments: { type: String, required: true },
    date: { type: Date, required: true },
});

const BackendComments = mongoose.model("Backend Comments", backendCommentSchema);

module.exports = BackendComments; 