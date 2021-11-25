import mongoose from 'mongoose';
import dotenv from "dotenv-defaults";
import { deleteDB } from './routes/api/api'
// import User from './models/user';

const connectDB = () => {
    dotenv.config();

    mongoose.connect(
        process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((res) => console.log("mongo db connection created"));

    const db = mongoose.connection;
    db.on("error", (err) => console.log(err));
    db.once("open", async () => {
        await deleteDB();
        console.log('Database connected');
    })
}

export { connectDB };