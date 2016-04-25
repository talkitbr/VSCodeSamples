import mongoose = require('mongoose');
import IBodyMassIndex = require('./IBodyMassIndex');

var bodyMassIndexSchema = new mongoose.Schema({
    weight: { type: Number, required: true },
    stature: { type: Number, required: true }
}, { 
    toJSON: {
        virtuals: true 
    }
});

/* Returns the bmi based on weight and stature */
bodyMassIndexSchema.virtual('bmi').get(function() {
    return this.weight / Math.pow(this.stature, 2);
});

var BodyMassIndex = mongoose.model<IBodyMassIndex>('BodyMassIndex', bodyMassIndexSchema);

export = BodyMassIndex;