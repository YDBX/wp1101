import ScoreCard from "../../models/ScoreCards";

const saveScoreCard = async (name, subject, score) => {
    // console.log(123);
    const existing = await ScoreCard.findOne({ name: name, subject: subject });
    console.log(existing);
    if (existing) {
        try {
            await ScoreCard.updateOne({name: name, subject: subject}, {score: score})
            console.log("Update scorecard");
        } catch (e) { throw new Error ("Scorecard update error: " + e); }
    }
    else {
        try {
            const newScoreCard = new ScoreCard({ name, subject, score });
            console.log("Create scorecard", newScoreCard);
            newScoreCard.save();
        } catch (e) { throw new Error("Scorecard creation error: " + e); }
    }
    
    return existing;
};

const queryDB = async (type, queryString) => {
    let data;
    if (type === 'name'){
        data = await ScoreCard.find({ name : queryString });
    }
    else if (type === 'subject'){
        data = await ScoreCard.find({ subject : queryString });
    }
    const messages = data.map((value) => `Query (${value.name}, ${value.subject}, ${value.score})`);
    if (messages.length === 0){
        return null;
    }
    else {
        return messages;
    }
}

const deleteDB = async () => {
    try {
        await ScoreCard.deleteMany({});
        console.log("Database deleted");
    } catch (e) { throw new Error("Database deletion failed"); }
}

export { saveScoreCard, queryDB, deleteDB };