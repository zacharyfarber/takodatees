const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('../config/devKeys');
const printfulWebhookRouter = require('./routes/printfulWebhook');
const productsRouter = require('./routes/products');

// CREATE EXPRESS INSTANCE
const app = express();

// CONNECT TO DATABASE
mongoose.connect(keys.mongoURI);

// TELL EXPRESS INSTANCE TO USE BODYPARSER MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // TELL EXPRESS INSTANCE TO USE CORS
app.use(cors()); // Todo: Configure CORS to specific domains/sub domians/ports

// RUN PRINTFUL ROUTES
printfulWebhookRouter(app);

// RUN PRODUCTS ROUTES
productsRouter(app);

// TELL EXPRESS INSTANCE TO LISTEN ON SPECIFIED PORT
app.listen(5000);
