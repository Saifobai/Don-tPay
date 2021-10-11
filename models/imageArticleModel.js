const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
        articleimage: String,
        created: {type: Date, default: Date.now()},
        
})

const imageModel = new mongoose.model('articleimage', imageSchema);

module.exports = imageModel;