const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('../config/devKeys');
const printfulRouter = require('./routes/printful');

// CREATE EXPRESS INSTANCE
const app = express();

// CONNECT TO DATABASE
mongoose.connect(keys.mongoURI);

// TELL EXPRESS INSTANCE TO USE BODYPARSER MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // TELL EXPRESS INSTANCE TO SET THE HEADERS ATTRIBUTE FOR PRINTFUL ROUTES
// app.use(function (req, res, next) {
//     const matchUrl = 'https://api.printful.com';

//     if (req.url.substring(0, matchUrl.length) === matchUrl) {
//         res.setHeader('Authorization', `Bearer ${keys.printfulToken}`);
//         res.setHeader('X-PF-Store-Id', keys.printfulStoreId);
//     }

//     return next();
// });

// RUN PRINTFUL ROUTES
printfulRouter(app);

// TELL EXPRESS INSTANCE TO LISTEN ON SPECIFIED PORT
app.listen(3000);
