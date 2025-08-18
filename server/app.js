const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 8080;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json ({
        message: "Hello World!"
    })
})

app.listen(PORT, () => {
    console.log(`Server is listing on PORT ${PORT}`);
})