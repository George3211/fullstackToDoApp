const mongoose = require("mongoose");
const Task = require("../models/Task");
const data = require("./data");
const connectDb = require("../config/db");

connectDb();

const initDb = async () => {

    await Task.deleteMany({});

    let tasks = await Task.insertMany(data);

    console.log(tasks);
    console.log(`task initialized`);
};

initDb();
