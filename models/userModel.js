const mongoose = require('mongoose');
const addressSchema = require('./addressModel');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    age: { type: Number, min: 18, max: 80, required: true },
    email: { type: String, unique: true, required: true },
    userimage: { type: String },
    phone: { type: Number },
    rating: { type: String },
    created: {type: Date, default: Date.now()},
    offer:[{type: mongoose.SchemaTypes.ObjectId, ref: "offer"}],
    favorite: [{ type: mongoose.SchemaTypes.ObjectId, ref: "article"}],
    mempership: {type: String, enum: ["basic", "premium", "premium plus"], default: "basic"},
    address: addressSchema
})

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
