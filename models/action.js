var mogoose = require('mongoose');
var Schema  = mogoose.Schema;
var ActionSchema = new Schema(
    {
        name: {type: String, required: true},
        template: {type: String}
    }
);
//Virtual URL
ActionSchema
.virtual('url')
.get(function() {
    return '/permit/action/' + this._id;
});
//Export model
module.exports = mogoose.model('Action', ActionSchema);