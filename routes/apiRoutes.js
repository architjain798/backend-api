const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

router.post("/add", async (req, res) => {
  try {
    //console.log(req);
    const { name, description, size } = req.body;

    const note = new Property({
      name,
      description,
      size,
    });

    //jo note object banaya usko abb db mein store kr diya
    const savedNote = await note.save();

    //return kr diya response
    res.json(savedNote);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
