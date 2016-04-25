import mongoose = require('mongoose');
import IPerson = require('./IPerson');
import IBodyMassIndex = require('./IBodyMassIndex');

var personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String },
    birthdate: { type: Date },
    bmiList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BodyMassIndex' }]
});

var Person = mongoose.model<IPerson>('Person', personSchema);

export = Person;