var mogoose = require('mongoose');
var Schema  = mogoose.Schema;
var CourtSchema = new Schema(
    {
        name: {type: String, required: true},
        kind: {type: String, required: true}
    }
);
//Virtual URL
CourtSchema
.virtual('url')
.get(function() {
    return '/permit/court/' + this._id;
});
//Export model
module.exports = mogoose.model('Court', CourtSchema);