const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const connectDB = require("./config/db");
connectDB();

const morgan = require('morgan');
app.use(morgan('dev'));

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

const authEndpoints = require("./endpoints/authEndpoints");
app.use("/a",authEndpoints);

const secureEndpoints = require("./endpoints/secureEndpoints");


const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
});