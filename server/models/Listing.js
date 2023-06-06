const { Schema, model } = require('mongoose');

// DEFINE THE LISTING MODEL SCHEMA
const listingSchema = new Schema({
    printfulId: Number,
    title: String,
    description: { type: String, default: null },
    images: { type: [{ type: String }], default: null }
});

// CREATE THE LISTING MODEL CLASS
const ListingClass = model('listing', listingSchema);

// EXPORT THE LISTING MODEL
module.exports = ListingClass;
