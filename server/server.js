const express = require('express');
const app = express();
const path = require('path');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middlewares
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const port = 5000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is listening on port ${port}...`));
    } catch(error) {
        console.log(error);
    }
}

start();
