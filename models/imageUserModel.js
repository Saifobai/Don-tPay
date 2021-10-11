const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
        imagename: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        },
        created: {type: Date, default: Date.now()},
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: false},
})

const imageModel = new mongoose.model('userimage', imageSchema);

module.exports = imageModel;