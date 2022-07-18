const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3030;
const app = express();

const corsConfig = {
    origin: true,
    Credential: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Let's Code!")
})

app.listen(port, (req, res) => {
    console.log(`Server run on port ${port}`);
})