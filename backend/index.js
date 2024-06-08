const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const jobRoutes = require('./routes/jobsRoutes'); 
const port = 8000;

const connectionString = "mongodb+srv://rathormohit547:123@cluster0.imwjsw4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express();

mongoose.connect(connectionString)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(cors());

app.use('/jobs', jobRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
