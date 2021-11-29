const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validator = require('validator');

const userSchema = new Schema({
    
    username:{
        type: String,
        trim: true,
        required: [true, 'An order should always have a name']
    },
    email:{
        type: String,
        lowercase: true,
        validate: [validator.isEmail,
        "Please provide a valid email"],
        required: [true, 'An order should have an email'],
        unique: true
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'A user must have a password']
    },
},
{
    timestamps: true,
  });

const User = mongoose.model('User', userSchema);

module.exports = User;