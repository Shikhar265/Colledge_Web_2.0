const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    airportCode: { type: String, required: true, trim: true, unique: true, immutable: true },
    airportName: { type: String, required: true, trim: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    numberOfTerminals: { type: Number, required: true },
    isInternational: { type: Boolean, required: true },
    runwayLength: { type: Number, required: true },
    contactNumber: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Airport', airportSchema);
