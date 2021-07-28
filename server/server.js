const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

console.log("server started");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

console.log('We are about to connect');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB is successfully connected');
});