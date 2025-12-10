const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Blog Comment Schema
const BlogCommentSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

const BlogComment = mongoose.model("BlogComment", BlogCommentSchema);

// POST route for blog comments
router.post("/comment", async (req, res) => {
    try {
        console.log("Blog comment received:", req.body);

        const newComment = new BlogComment(req.body);
        await newComment.save();

        res.json({ message: "Comment submitted successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to submit comment" });
    }
});

module.exports = router;
