import { makeName } from './utility';

const Query = {
  async users(parent, args, { db }, info) {
    const users = await db.UserModel.find({});
    return users;
  },
  async chatBox(parent, { name1, name2 }, { db }, info) {
    
    if (!name1 || !name2) {
      return await db.ChatBoxModel.find({});
    }

    const chatBoxName = makeName(name1, name2);
    return await db.ChatBoxModel.findOne({ name: chatBoxName });
  },
  async messages(parent, args, { db }, info) {
    return await db.MessageModel.find({});
  }
};

export default Query;
