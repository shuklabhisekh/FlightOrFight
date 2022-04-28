const express = require("express");

const router = express.Router();

const Flight = require("../model/flightModel");

router.post("", async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    return res.status(200).send(flight);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    // const query = { start: req.query.start, end: req.query.end };
    if (req.query.start&&req.query.end) {
      const flight = await Flight.find({ start: req.query.start, end: req.query.end }).lean().exec();
      return res.status(200).send(flight);
    } else {
      const flight = await Flight.find().lean().exec();
      return res.status(200).send(flight);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// router.get("", async (req, res) => {
//   try {
//     const flight = await Flight.find({
//       // $and:[
//       start: req.query.start,
//       // req.query.end
//       // ]
//     })
//       .lean()
//       .exec();
//     return res.status(200).send(flight);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// });
module.exports = router;
