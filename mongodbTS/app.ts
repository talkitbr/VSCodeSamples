import mongoose = require("mongoose");
import db = require("./db/model");
import BodyMassIndex = require("./db/BodyMassIndex");
import Person = require("./db/Person");

console.log("creating person");

var person = new Person({ name: "Smith", gender: "Male", birthdate: new Date(1970, 4, 20)});

var bmi;
bmi = new BodyMassIndex({ weight: 73.8, stature: 1.8 });
bmi.save();
person.bmiList.push(bmi._id);

bmi = new BodyMassIndex({ weight: 79.5, stature: 1.8 });
bmi.save();
person.bmiList.push(bmi._id);

bmi = new BodyMassIndex({ weight: 71.7, stature: 1.8 });
bmi.save();
person.bmiList.push(bmi._id);
    
person.save(function(error, person) {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    
    console.log("listing person");
    db.getPersonList(function(personList) {
        console.log(JSON.stringify(personList, null, "\t"));
        process.exit(0);
    });   
});