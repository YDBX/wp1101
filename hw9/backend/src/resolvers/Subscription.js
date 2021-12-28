import { makeName, checkChatBox } from "./utility";

const Subscription = {
  message: {
    async subscribe(parent, { from, to }, { db, pubsub }, info) {
      const chatBoxName = makeName(from, to);

      const chatBox = await checkChatBox(db, chatBoxName, "subscribe");

      if(!chatBox) {
        throw new Error("ChatBox not found");
      }

      return pubsub.asyncIterator(`chatBox ${chatBoxName}`);
    },
  },
};

export { Subscription as default };
