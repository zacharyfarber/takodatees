const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('../config/devKeys');
const printfulRouter = require('./routes/printful');

// CREATE EXPRESS INSTANCE
const app = express();

// CONNECT TO DATABASE
mongoose.connect(keys.mongoURI);

// TELL EXPRESS INSTANCE TO USE MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// RUN PRINTFUL ROUTES
printfulRouter(app);

// TELL EXPRESS INSTANCE TO LISTEN ON SPECIFIED PORT
app.listen(3000);
