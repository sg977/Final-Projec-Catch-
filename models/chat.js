const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    userOne: { type: String, required: true },
    userTwo: { type: String, required: true },
    hooked: { type: Boolean, required: true },
    messages: [{
        text: { type: String, required: true },
        senderID: { type: String, required: true },
        date: { type: Date, default: Date.now }
    }],
    date: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;