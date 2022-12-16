const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => (console.log("DB Connection Successfull")))
.catch((err) => console.log(err));

app.listen(8800, ()=> {
    console.log('BackendServer is Running on Port 8800');
});

