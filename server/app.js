const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const connectDb = require("./config/db");

connectDb();

// Routes
let taskRoutes = require("./routes/taskRoute");

const corsOptions = {
  origin: 'http://localhost:5173/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Task Routes
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is listing on PORT ${PORT}`);
})