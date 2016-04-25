"use strict";
var mongoose = require('mongoose');
var personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String },
    birthdate: { type: Date },
    bmiList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BodyMassIndex' }]
});
var Person = mongoose.model('Person', personSchema);
module.exports = Person;
//# sourceMappingURL=Person.js.map