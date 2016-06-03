var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperPowerSchema = new Schema ({
  power_name: {type: String}
});


var SuperPower = mongoose.model('SuperPowers', SuperPowerSchema);

module.exports = SuperPower;
