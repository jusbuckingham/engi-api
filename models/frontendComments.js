const mongoose = require("mongoose");

const frontendCommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
});

const FrontendComments = mongoose.model("Frontend Comments", frontendCommentSchema);

module.exports = FrontendComments; 