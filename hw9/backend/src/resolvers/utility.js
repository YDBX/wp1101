const checkUser = (db, name, errFunc) => {
    if (!name) throw new Error("Missing user name for " + errFunc);
    return db.UserModel.findOne({ name: name });
};

const newUser = (db, name) => {
    return new db.UserModel({ name }).save();
};

const makeName = (name1, name2) => {
    return name1 < name2 ? (name1 + "_" + name2) : (name2 + "_" + name1);
};

const checkChatBox = (db, chatBoxName, errFunc) => {
    if (!chatBoxName) throw new Error("Missing chatBox name for " + errFunc);
    return db.ChatBoxModel.findOne({ name: chatBoxName });
};

const newChatBox = (db, chatBoxName) => {
    return new db.ChatBoxModel({ name: chatBoxName }).save();
};

const checkMessage = async (db, from, to, message, errFunc) => {
    const chatBoxName = makeName(from, to);
    return {
        chatBox: await checkChatBox(db, chatBoxName, errFunc),
        sender: await checkUser(db, from, errFunc),
        to: await checkUser(db, to, errFunc),
    }
};

const newMessage = (db, sender, body) => {
    return new db.MessageModel({ sender: sender, body: body }).save();
};

export {checkUser, newUser, makeName, checkChatBox, checkMessage, newMessage, newChatBox}