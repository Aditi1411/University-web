require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =====================
// 🌐 MongoDB Connection
// =====================
console.log("MONGO_URI =", process.env.MONGO_URI); // Debug line

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// =====================
// 📩 Routes
// =====================
const contactRoute = require("./routes/contact");
app.use("/contact", contactRoute);

// =====================
// 🚀 Start Server
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




