const { Schema, model } = require('mongoose');

// DEFINE THE VARIANT SCHEMA
const variantSchema = new Schema({
    variantId: Number,
    variantName: String
});

// DEFINE THE LISTING SCHEMA
const listingSchema = new Schema({
    printfulId: Number,
    title: String,
    variants: [variantSchema],
    description: { type: String, default: '' },
    images: { type: [{ type: String }], default: [] }
});

// CREATE THE LISTING MODEL
const ListingClass = model('listing', listingSchema);

// EXPORT THE LISTING MODEL
module.exports = ListingClass;
