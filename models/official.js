var mogoose = require('mongoose');
var Schema  = mogoose.Schema;
var OfficialSchema = new Schema(
    {
        patroname: {type: String, required: true},
        position: {type: String},
        rank: {type: String},
        phone: {type: String}
    }
);
//Virtual URL
OfficialSchema
.virtual('url')
.get(function() {
    return '/permit/official/' + this._id;
});
//Export model
module.exports = mogoose.model('Official', OfficialSchema);