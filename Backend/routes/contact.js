const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

// POST Route
router.post("/", async (req, res) => {
    console.log("Form submitted:", req.body);

    try {
        const data = new Contact(req.body);
        await data.save();

        res.json({ message: "Message stored successfully!" });
    } catch (err) {
        console.error("Error saving form:", err);
        // FIXED so frontend never gets undefined
        res.status(500).json({ message: "Failed to store message" });
    }
});

module.exports = router;

