import mongoose = require('mongoose');

interface IBodyMassIndex extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    weight: number;
    stature: number;    
}

export = IBodyMassIndex