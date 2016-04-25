"use strict";
var mongoose = require('mongoose');
var Person = require('./Person');
mongoose.connect('mongodb://localhost:27017/myMongoDb');
function getPerson(id, callback) {
    Person.findById(id).populate("bmiList").exec(function (error, person) {
        if (error) {
            console.error(error);
            return;
        }
        callback(person);
    });
}
exports.getPerson = getPerson;
function getPersonList(callback) {
    var query = {};
    Person.find(query).populate('bmiList').exec(function (error, personList) {
        if (error) {
            console.error(error);
            return;
        }
        callback(personList);
    });
}
exports.getPersonList = getPersonList;
//# sourceMappingURL=model.js.map