const express = require('express');
const bodyParser = require('body-parser');

// CREATE EXPRESS INSTANCE
const app = express();

// TELL EXPRESS INSTANCE TO USE MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TELL EXPRESS INSTANCE TO LISTEN ON SPECIFIED PORT
app.listen(3000);
