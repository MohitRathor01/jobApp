const express = require('express');
const router = express.Router();
const job = require('../models/JobPosting');

router.post('/', async (req, res) => {
    console.log("Reached here ------------");
    try {
        const newJob = new job(req.body);
        await newJob.save();
        console.log(newJob);
        res.status(201).send('Job created successfully');
    } catch (error) {
        console.error("Error creating job:", error.message);
        res.status(500).send('Error creating job');
    }
});

router.get('/', async (req, res) => {
    try {
        const allJobs = await job.find();
        res.json(allJobs);
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        res.status(500).send('Error fetching jobs');
    }
});

module.exports = router;
