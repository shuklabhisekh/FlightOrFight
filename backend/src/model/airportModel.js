const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema(
  {
    airportName: { type: String, required: true },
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("airport", airportSchema);
