const axios = require('axios');
const keys = require('../../config/devKeys');
const Listing = require('../models/Listing');

module.exports = (app) => {
    // RECIEVE NEW TEMPLATE FROM PRINTFUL ADD NEW PRODUCT TO THE DATABASE
    app.post('/printful-webhook', async (req, res) => {
        try {
            // GRAB NEW PRODUCT ID FROM INCOMING REQUEST OBJECT
            const newProductId = req.body.data.sync_product.id;

            // GET NEW PRODUCT INFORMATION
            const { data } = await axios.get(
                `https://api.printful.com/store/products/${newProductId}`,
                {
                    headers: {
                        Authorization: keys.printfulToken,
                        'X-PF-Store-Id': keys.printfulStoreId
                    }
                }
            );

            console.log(data);

            // // CREATE A NEW LISTING
            // const listing = new Listing({
            //     printfulId: product.id,
            //     title: product.name
            //     // variants:
            // });

            // // SAVE THE NEW LISTING TO THE DATABASE
            // await listing.save();

            // RESPOND TO SERVER WITH CODE 200 - OK
            res.status(200).json({ message: 'OK' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'ERROR' });
        }
    });
};
