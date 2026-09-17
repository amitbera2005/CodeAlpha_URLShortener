const express = require("express");
const cors = require("cors");
require("dotenv").config();

const urlRoutes = require("./routes/urlRoutes");
const { redirectUrl } = require("./controllers/urlController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CodeAlpha URL Shortener API is running"
    });
});

app.use("/api", urlRoutes);

app.get("/:shortCode", redirectUrl);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});