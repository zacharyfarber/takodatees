const { Schema, model } = require('mongoose');

// DEFINE THE LISTING MODEL SCHEMA
const listingSchema = new Schema({
    printfulId: Number,
    title: String,
    variants: { type: [{ type: String }] },
    description: { type: String, default: '' },
    images: { type: [{ type: String }], default: [] }
});

// CREATE THE LISTING MODEL CLASS
const ListingClass = model('listing', listingSchema);

// EXPORT THE LISTING MODEL
module.exports = ListingClass;
