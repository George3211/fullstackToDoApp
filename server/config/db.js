const mongoose = require("mongoose");

async function connectDb() {
    try {
        let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todos");

        console.log(`Data Connected ${conn.connection.host}`);
    } catch(err) {
        console.log(`------ERROR-----`)
        console.log(err)
    }
};

module.exports = connectDb