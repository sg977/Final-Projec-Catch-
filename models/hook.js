const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hookSchema = new Schema({
    hooked: { type: Boolean, required: true}
});

const Hook = mongoose.model("Hook", hookSchema);

module.exports = Hook;