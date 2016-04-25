"use strict";
var mongoose = require('mongoose');
var bodyMassIndexSchema = new mongoose.Schema({
    weight: { type: Number, required: true },
    stature: { type: Number, required: true }
}, {
    toJSON: {
        virtuals: true
    }
});
/* Returns the bmi based on weight and stature */
bodyMassIndexSchema.virtual('bmi').get(function () {
    return this.weight / Math.pow(this.stature, 2);
});
var BodyMassIndex = mongoose.model('BodyMassIndex', bodyMassIndexSchema);
module.exports = BodyMassIndex;
//# sourceMappingURL=BodyMassIndex.js.map