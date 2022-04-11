const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

//Route-1 Add a note api POST  "api/property/add"
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

router.get("/getdata", async (_req, res) => {
  try {
    const data = await Property.find();
    res.send(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/deleteproperty/:id", async (req, res) => {
  try {
    const propertyStatus = await Property.findById(req.params.id);

    if (!propertyStatus) {
      return res.status(404).json({ errors: "property does't exist" });
    }

    const property = await Property.findByIdAndDelete(req.params.id);

    //send response to user
    res.send({ success: "note has been deleted", property: property });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
