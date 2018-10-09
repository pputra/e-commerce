const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    items: [{
        type: Schema.Types.ObjectId, ref: 'Item'
    }],
    total_price: Number
}, {
    timestamps: true
})

var Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;