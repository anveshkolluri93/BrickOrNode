'use strict';

var mongoose = require('mongoose'),
  Person = mongoose.model('Persons');

  exports.get_all_persons = function(req, res) {
    Person.find({}, function(err, person) {
      if (err)
        res.send(err);
      res.json(person);
    });
  };
  
  
  exports.insert_a_person = function(req, res) {
      var new_person = new Person(req.body);
      new_person.save(function(err, person) {
        if (err)
          res.send(err);
        res.json(person);
      });
    };