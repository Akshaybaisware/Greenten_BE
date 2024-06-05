const { model } = require("mongoose");
const VideoSchema = require("../Models/VideSchema");


const uploadVideoQuestions = async(req, res) => {
    try {
        const { videonumber, url, questions } = req.body;

        if (!videonumber || !url || !questions) {
            return res.status(400).json({ error: 'All fields are required' });
        }


        const questionSet = new Set(questions.map(question => question.question));
        if (questionSet.size !== questions.length) {
            return res.status(400).json({ error: 'Questions must be unique' });
        }

        const videoData = {
            videonumber,
            url,
            questions
        };

        const newVideo = await VideoSchema.findOneAndUpdate({ url: url },
            videoData, { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the video data' });
    }
};

module.exports = {
    uploadVideoQuestions
};