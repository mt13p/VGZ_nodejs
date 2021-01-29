var mogoose = require('mongoose');
var Schema  = mogoose.Schema;
var SenderSchema = new Schema(
    {
        name: {type: String, required: true},
        legalservice: {type: String, required: true}
    }
);
//Virtual URL
SenderSchema
.virtual('url')
.get(function() {
    return '/permit/sender/' + this._id;
});
//Export model
module.exports = mogoose.model('Sender', SenderSchema);