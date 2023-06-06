const Listing = require('../models/Listing');

module.exports = (app) => {
    // RECIEVE NEW TEMPLATE FROM PRINTFUL ADD NEW PRODUCT TO THE DATABASE
    app.post('/printful-webhook', async (req, res) => {
        try {
            // GRAB INCOMING REQUEST BODY
            const body = req.body;

            // CREATE A NEW LISTING
            const listing = new Listing({
                printfulId: body.id,
                title: body.name
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
