import express from 'express'
import { genNumber, getNumber } from '../core/getNumber'
// import { genAnswerList, machine_guess } from './machineGuess';


let answers;
// count ?A?B
const getStatus = (guessed, answer) => {
    let count_A = 0;
    let count_B = 0;
    for (let i = 0; i < answer.length; i++) {
        if (answer.includes(guessed[i])) {
            count_B += 1;
        }
        if (guessed[i] === answer[i]) {
            count_A += 1;
        }
    }
    return count_A.toString(10) + 'A' + (count_B - count_A).toString(10) + 'B';
}

const genAnswerList = () => {
    answers = Array.from(Array(10000).keys());
    answers = answers.map((value) => value.toString(10).padStart(4, '0'));
}

const machine_guess = (player_guess_number, player_guess_status, answer) => {
    if (player_guess_status === '4A0B') {
        const machine_guess_number = player_guess_number;
        const machine_guess_status = player_guess_status;
        return {machine_guess_number, machine_guess_status};
    }
    else {
        answers = answers.filter((value) => getStatus(player_guess_number, value) === player_guess_status)
        let choose = Math.floor(Math.random() * answers.length);
        const machine_guess_number = answers[choose];
        const machine_guess_status = getStatus(machine_guess_number, answer)
        answers = answers.filter((value) => getStatus(machine_guess_number, value) === machine_guess_status)
        console.log(answers);
        return {machine_guess_number, machine_guess_status};
    }    
}

const router = express.Router()

router.post('/start', (_, res) => {
    genNumber();
    genAnswerList();
    res.json({msg: 'The game has started.'})
})

router.get('/guess', (req, res) => {
    const answer = getNumber();
    const player_guess_number = req.query.number;
    console.log(answer);
    console.log(player_guess_number);
    if (!player_guess_number || player_guess_number.length !== 4) {
        res.status(406).send({msg: 'Illegal number'})
    }
    else {
        const player_guess_status = getStatus(player_guess_number, answer);
        const machine_guess_infor = machine_guess(player_guess_number, player_guess_status, answer);
        console.log(machine_guess_infor);
        res.status(200).send({player_msg: player_guess_status, machine_msg: machine_guess_infor});
    }
})

router.post('/restart', (_, res) => {
    genNumber();
    genAnswerList();
    res.send({msg: 'The game is restarted.'})
})
export default router;