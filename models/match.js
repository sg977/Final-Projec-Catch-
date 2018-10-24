const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String, required: false },
  age: { type: Number, required: true },
  neighborhood: { type: String, required: true },
  gender: { type: String, required: true },
  genderInterest: { type: String, required: true },
  date: { type: Date, default: Date.now },
  matched: { type: Boolean, required: true },
  hooked: { type: Boolean, required: true }
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
