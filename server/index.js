const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// M4qB9Ljcn2tfRTYM

const app =  express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

const MONGO_URI = 'mongodb+srv://tasmia:M4qB9Ljcn2tfRTYM@cluster0.zcxbxtn.mongodb.net/portal?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () =>{
    console.log('connected to MongoDB');
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})