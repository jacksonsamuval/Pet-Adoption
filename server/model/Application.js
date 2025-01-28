const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    petId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "petAdoption", 
        required: true,
    },
    adopterName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "Pending"
    },
});

const Application = mongoose.model('Application', ApplicationSchema);
module.exports = Application;