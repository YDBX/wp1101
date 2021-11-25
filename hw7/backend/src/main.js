import express from 'express'
import cors from 'cors'
import Route from './routes/index'
import { connectDB } from './mongo';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/', Route);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})