import mongoose = require('mongoose');
import IBodyMassIndex = require('./IBodyMassIndex');

interface IPerson extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    gender: string;
    birthdate: Date;
    bmiList: IBodyMassIndex[];
}

export = IPerson;