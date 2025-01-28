require('dotenv').config();
const express = require('express');
const RunServer = require('./database/connection');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

RunServer();

app.use("/pet",petRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});