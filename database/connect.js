const mongoose = require("mongoose");
// MONGO_URI = mongodb://localhost:27017/Todo-List
//E1EXSM27oMvoDajc
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("MonogDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};
module.exports = connectDB;
