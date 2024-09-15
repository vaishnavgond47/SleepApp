const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true, index: true },
    firstName: { type: String },
    lastName: { type: String },
    emailID: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phoneCode: { type: String },
    phoneNumber: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('User', UserSchema);
