const express = require('express');
const SleepData = require('../../models/sleep.model');
const router = express.Router();

router.post('/update/sleep', async (req, res) => {
    try {
        const updateObject = req.body.updateObject;
        const userID = req.body.userID; // Assume userID is passed in the body

        const updatedSleepData = await SleepData.findOneAndUpdate(
            { userID: userID },
            { $set: updateObject },
            { new: true, upsert: true }
        );

        res.json({
            status: "success",
            data: updatedSleepData,
            message: "operation completed successfully",
            displayMessage: "Successful"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
            displayMessage: "Something went wrong"
        });
    }
});

module.exports = router;
