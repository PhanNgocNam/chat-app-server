const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 8,
    },
    pic: {
        type: String,
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    token: {
        type: String
    },
    createdAt: {
        type: String,
        default: new Date(Date.now()).getDate() + "/" + (new Date(Date.now()).getMonth() + 1) + "/" + new Date(Date.now()).getFullYear(),
        require: true
    }
})

module.exports = mongoose.model("Users", userSchema)