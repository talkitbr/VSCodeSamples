import mongoose = require('mongoose');
import IBodyMassIndex = require('./IBodyMassIndex');
import BodyMassIndex = require('./BodyMassIndex');
import IPerson = require('./IPerson');
import Person = require('./Person');

mongoose.connect('mongodb://localhost:27017/myMongoDb');

export function getPerson(id: string, callback: (person: IPerson) => void) {
    Person.findById(id).populate("bmiList").exec(function (error, person) {
        if (error) {
            console.error(error); return;
        }
        
        callback(person);
    });
}

export function getPersonList(callback: (personList: IPerson[]) => void) {
    var query = {};
    Person.find(query).populate('bmiList').exec(function(error, personList) {
        if(error) {
            console.error(error); return; 
        }
        
        callback(personList);
    });
}