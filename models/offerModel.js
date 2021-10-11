const mongoose = require('mongoose');

const offerSchema = mongoose.Schema({
    useroffer: [{type: mongoose.SchemaTypes.ObjectId, ref: "article", required: true}],
    user_id: {type: mongoose.SchemaTypes.ObjectId, ref: "user", required: true}    
})

const offerModel = new mongoose.model('offer',offerSchema);

module.exports = offerModel;
