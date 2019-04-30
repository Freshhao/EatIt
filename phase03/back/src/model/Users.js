const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uSchema = new Schema(
  {
    userName: String,
    password: String,
    cid: String, 
    phone: String, 
    sex: String, 
    icon: String, 
    name: { type: String, default: "" }, 
    email: String, 
    role: { type: Number, default: 1 }, 
    score: { type: Number, default: 0 }, 
    balance: { type: Number, default: 0 } 
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("users", uSchema);
