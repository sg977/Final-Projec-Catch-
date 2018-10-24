const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    userOne: { type: String, default: "one_blank" },
    userTwo: { type: String, default: "two_blank" },
    hooked: { type: Boolean, default: false },
    messages: [{
        text: { type: String, required: true },
        senderID: { type: String, required: true },
        date: { type: Date, default: Date.now }
    }],
    date: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;