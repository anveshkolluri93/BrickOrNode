'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
    name: {
      type: String,
      required: 'Name is mandatory field'
    },
    Profession: {
      type: String,
      optional: 'Its not mandatory field'
    }
  });


module.exports = mongoose.model('Persons', PersonSchema);