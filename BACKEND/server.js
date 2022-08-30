//Import Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

//Defining the port
const PORT = process.env.PORT || 8070;

// mount the specified middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Obtatain the Connection URL from .env file
const URL = process.env.MONGODB_URL;

//Building MongoDB Connection

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Successful");
})

//Make access to Notoice route

const NoticeRouter = require("./routes/Notice.js");
app.use("/notice", NoticeRouter);

//Make access to Inquiry route
const InquiryRouter = require("./routes/Inquiry.js");
app.use("/inquiry", InquiryRouter);

//Make access to admin
const adminRouter = require("./routes/admin.js");
app.use("/Admin", adminRouter);

//Running the app on the defined port
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});