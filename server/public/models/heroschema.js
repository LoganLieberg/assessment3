var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema ({
  id: { type: String},
  alias: {type: String},
  firstname: {type: String},
  lastname: {type: String},
  city: {type: String},
  power_name: {type: String}
});


var Hero = mongoose.model('Heroes', HeroSchema);

module.exports = Hero;
