require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const Router = require("./router/todo-router");
const cors = require('cors');
const connectDB = require("./database/connect");
const corsOptions = {
    origin: process.env.CORS_URI,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions)); //Handling cors for security
app.use(express.json());
app.use(express.urlencoded({extended: false}));
connectDB();
app.use('/todo',Router);

app.listen(port, () => console.log(`App listening on port ${port}!`));