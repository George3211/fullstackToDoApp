const Task = require("../models/Task");

module.exports.getTask = async (req, res) => {
    let tasks = await Task.find();
    
    res.json({tasks})
}