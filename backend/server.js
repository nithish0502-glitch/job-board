const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

// Mongoose schema
const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
});

const Job = mongoose.model("Job", JobSchema);

// REST API
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.get("/jobs/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    job ? res.json(job) : res.status(404).send("Job not found");
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
});

app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
