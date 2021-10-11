const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    streetname: {type: String, required: true},
    hausnumber: {type: Number, required: true},
    zipcode: {type: Number, required: true},
    city: {type: String, required: true},
    land: {type: String, required: true},
    created: {type: Date, default: Date.now()},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: false}
})

// const addressModel = new mongoose.model('address',addressSchema);

// module.exports = addressModel;

module.exports = addressSchema; 