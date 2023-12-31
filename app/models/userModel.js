const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: { type: String },
    avatar: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)