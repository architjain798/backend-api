const express = require("express");
const connectToMongoDB = require("./db");
const apiRoutes = require("./routes/apiRoutes");
let cors = require("cors");

const app = express();

connectToMongoDB();

//built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.status(200).send("Hello server is running").end();
});

//Availabe routes
app.use("/api/property", apiRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
