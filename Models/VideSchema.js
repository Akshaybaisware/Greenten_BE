const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    videonumber: {
        type: String, // Corrected type
    },
    url: {
        type: String, // Added URL field
        required: true
    },
    questions: [{
        question: {
            type: String,
            required: true
        },
        // answer: {
        //     type: String,
        //     required: true
        // }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Video', VideoSchema);