const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema(
  {
    airportName: { type: String, required: true },
    flightId: [
      { type: mongoose.Schema.Types.ObjectId, ref: "flight", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("airport", airportSchema);
