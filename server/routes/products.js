const Listing = require('../models/Listing');

module.exports = (app) => {
    // GET RECENT PRODUCTS ROUTE
    app.get('/recent-products', async (req, res) => {
        // FIND LISTINGS AND SORT BY CREATEDAT
        const products = await Listing.find().sort({ createdAt: -1 }).limit(4);

        // SEND PRODUCTS TO REDUX STORE
        res.send(products);
    });
};
