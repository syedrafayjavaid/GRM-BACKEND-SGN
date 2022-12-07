const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    fullName: {
        type: String,
        require: [true, "Please enter name"],
        trim: true,
        maxlength: [50, "Full Name can not be more than 50 characters"]
    },
    fathersName: {
        type: String,
        require: [true, "Please enter  father name"],
        trim: true,
        maxlength: [50, "Father Name can not be more than 50 characters"]
    },
    cnin: {
        type: String,
        require: [true, "Please enter cnic"],
        unique: true,
        index: true,
        trim: true,
        maxlength: [13, "Cnic can not be more than 13 characters"]
    },
    age: {
        type: Number,
        require: [true, "Please enter cnic"],
    },
    address: {
        type: String,
        require: [true, "Please enter address"],
    },
    contact: {
        type: String,
        require: [true, "Please enter address"],
    },


})

module.exports = mongoose.model('User', UserSchema);
