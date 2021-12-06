let answers;

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

export {genAnswerList, machine_guess};