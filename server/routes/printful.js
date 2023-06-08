const axios = require('axios');
const keys = require('../../config/devKeys');
const Listing = require('../models/Listing');

module.exports = (app) => {
    // RECIEVE NEW TEMPLATE FROM PRINTFUL AND ADD NEW PRODUCT TO THE DATABASE
    app.post('/printful-webhook', async (req, res) => {
        try {
            // GRAB NEW PRODUCT ID FROM INCOMING REQUEST OBJECT
            const newProductId = req.body.data.sync_product.id;

            // GET NEW PRODUCT INFORMATION
            const { data } = await axios.get(
                `https://api.printful.com/store/products/${newProductId}`,
                {
                    headers: {
                        Authorization: `Bearer ${keys.printfulToken}`,
                        'X-PF-Store-Id': keys.printfulStoreId
                    }
                }
            );

            // SET VARIANTS
            const { sync_variants } = data.result;
            let variants = [];

            for (i in sync_variants) {
                variants.push({
                    variantId: sync_variants[i].id,
                    variantName: sync_variants[i].name
                });
            }

            // CREATE A NEW LISTING
            const { sync_product } = data.result;

            const listing = new Listing({
                title: sync_product.name,
                variants
            });

            // SAVE THE NEW LISTING TO THE DATABASE
            await listing.save();

            // RESPOND TO SERVER WITH CODE 200 - OK
            res.status(200).json({ message: 'OK' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'ERROR' });
        }
    });
};
