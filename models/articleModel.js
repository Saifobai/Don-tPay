const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    articlename: {type: String,max :21, required: true},
    description: {type: String, required: true},
    status:  {type: String, enum:["used", "like new", "new", "defect"], required: true},
    note: {type: String, max: 300},
    favorite: {type: Boolean, default: false},
    views: {type: Number, default: 0},
    quantity: {type: Number, min : 1, required: true},
    created: {type: Date, default: Date.now()},
    category: {type: String, enum: ["electronics", "sports", "collectables", "home", "fashion", "tools", "music", "books", "services", "vehicels"], required: true},
    feautured: {type: Boolean, default: false},
    articleimage: {type:String}
    
})

const articleModel = new mongoose.model('article',articleSchema);

module.exports = articleModel;