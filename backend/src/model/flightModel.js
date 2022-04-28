const { time } = require("console");
const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    start: {
      type: String,
      required: "true",
    },

    end: {
      type: String,
      required: "true",
    },

    cost: { type: Number, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    PNR: {
      type: Number,
      required: true,
      unique: true,
      minlength: 8,
      maxlength: 10,
    },
    capacity: { type: Number, required: true },
    airportId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "airport",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("flight", flightSchema);
