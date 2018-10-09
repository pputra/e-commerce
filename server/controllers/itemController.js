const Item = require('../models/item');
const ServerResponse = require('../helpers/serverResponse');

module.exports = {
    create: (req, res) => {
        let {name, price, picture} = req.body;
        Item.create({
            name,
            price,
            picture
        }).then((item) => {
            res.status(200).json(Item);
        }).catch((err) => {
            res.status(500).json({err:err});
        });
    },
    findById: (req, res) => {
        Item.findById(req.params.id).then((item) => {
            res.status(200).json(item);
        }).catch((err) => {
            res.status(500).json(err);
        });
    },
    update: (req, res) => {
        let {name, price, picture, stock} = req.body
        Item.updateOne({_id: req.params.id}, {
            name,
            price,
            picture,
            stock
        }).then(() => {
            res.status(200);
        }).catch((err) => {
            res.status(500);
        });
    },

    showAll: (req, res) => {
        Item.find({}).then((items) => {
            res.status(200).json(items);
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
};