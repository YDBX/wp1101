import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:4000/api/guess'})

const startGame = async () => {
    const { data: {msg} } = await instance.post('/start');
    return msg
};

const guess = async(number) => {
    try {
        const { data: {player_msg, machine_msg}, } = await instance.get('/guess', {params: {number}})
        return {player_msg, machine_msg}
    } catch {
        const player_msg = "Not legal";
        const machine_msg = "Not legal";
        return {player_msg, machine_msg}
    }
    
    // console.log(msg);
    
}

const restartGame = async () => {
    const { data: {msg} } = await instance.post('/restart');
    return msg
};

export { startGame, guess, restartGame };