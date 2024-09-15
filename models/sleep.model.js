const mongoose = require('mongoose');

const sleepDataSchema = new mongoose.Schema({
    userID: { type: String, required: true, index: true },
    sleepStruggleFrom: {
        min: { type: Number, enum: [0, 2, 8], required: true },
        max: { type: Number, enum: [2, 8, -1], required: true }
    },
    bedTime: { type: Date },
    wakeTime: { type: Date },
    sleepDuration: { type: Number, min: 0, max: 24 },
    dataCollectionStep: { type: Number, min: 1, max: 4, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('SleepData', sleepDataSchema);
