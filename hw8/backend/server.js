import WebSocket from 'ws'
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Message from './models/message';
import dotenv from 'dotenv-defaults';
import { initData, sendData, sendStatus } from './wssConnect';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((res) => console.log("mongo db connection created"))
const db = mongoose.connection

const broadMessage = (data, status) => {
    wss.clients.forEach((client) => {
        sendData(data, client);
        sendStatus(status, client);
    });
}

db.once('open', () => {
    wss.on('connection', (ws) => {
        initData(ws);
        ws.onmessage = async (byteString) => {
            const { data } = byteString;
            console.log(data);
            const [task, payload] = JSON.parse(data);
            switch (task) {
                case 'input' : {
                    const { name, body } = payload;
                    // save to DB
                    const message = new Message({ name, body });
                    try {
                        await message.save();
                    } catch (e) {
                        throw new Error("Message DB save error: " + e);
                    }
                    // Sent to client
                    // sendData(["output", [payload]], ws);
                    // sendStatus({
                    //     type: 'success',
                    //     msg: 'Message sent.'
                    // }, ws)
                    // Broadcast
                    broadMessage(data, {type: 'success', msg: 'Message sent.'})
                    break
                }
                case 'clear' : {
                    Message.deleteMany({}, () => {
                        broadMessage(['cleared'], {type: 'info', msg: 'Message cache cleared'})
                    })
                    break;
                }
                default: 
                    break
            }
            // ...
            // await dbMessage.save();
            
        }
    })
    const port = process.env.PORT || 4000;
    server.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
})