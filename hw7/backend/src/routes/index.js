import express from 'express';
import mongoose from 'mongoose';
import { saveScoreCard, queryDB, deleteDB } from './api/api'

const db = mongoose.connection;

const router = express.Router();

router.delete('/api/clear-db', (req, res) => {
    deleteDB();
    console.log('Delete Database');
    res.status(200).send({ message: "Database cleared" });
});

router.post('/api/create-card', async (req, res) => {
    const name = req.body.name;
    const subject = req.body.subject;
    const score = req.body.score;
    const existing = await saveScoreCard(name, subject, score);
    // console.log(existing);
    console.log("Create new scorecard");
    if (existing) res.status(200).send({ message: `Updating (${name}, ${subject}, ${score})`, card: true });
    else res.status(200).send({ message: `Adding (${name}, ${subject}, ${score})`, card: true })
});

router.get('/api/query-cards', async (req, res) => {
    console.log(req.query);
    const type = req.query.type;
    const queryString = req.query.queryString;
    const messages = await queryDB(type, queryString);
    const message = `${type} (${queryString}) not found`;
    res.status(200).send({ messages: messages, message: message });
});

export default router;