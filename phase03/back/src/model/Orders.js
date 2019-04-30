const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uSchema = new Schema(
  {
    items: [{
      num: Number,
      goods: { type: Schema.Types.ObjectId, ref: "goods" },
    }],
    user: { type: Schema.Types.ObjectId, ref: "users" },
    totalPrice: Number,
    status: { type: Number, default: 0 } 
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("orders", uSchema);
