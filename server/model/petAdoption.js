const { default: mongoose } = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    photo: {
        type: String, //cloudinary photo url
        required: true
    },
    status: {
        type: String,
        default: "Available"
    },
});

const PetAdoption = mongoose.model('PetAdoption', PetSchema);
module.exports = PetAdoption;