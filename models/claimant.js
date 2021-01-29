var mogoose = require('mongoose');
var Schema  = mogoose.Schema;
var ClaimantSchema = new Schema(
    {
        letter: {type: Schema.ObjectId, ref: 'Letter', required: true},
        num_input: {type: String, required: true},
        num_out: {type: String, required: true},
        date_out: {type: Date, required: true, default: Date.now},
        partoname: {type: String, required: true},
        num_case: {type: String, required: true},
        date_case: {type: Date, required: true, default: Date.now},
        court: {type: Schema.ObjectId, ref: 'Court', required: true},
        subject: {type: Schema.ObjectId, ref: 'Subject', required: true},
        suma: {type: Number, required: true, default: 0},
        defendant: {type: String, required: true},
        action: {type: Schema.ObjectId, ref: 'Action', required: true},
        note: {type: String}
    }
);
//Virtual URL
ClaimantSchema
.virtual('url')
.get(function() {
    return '/permit/claimant/' + this._id;
});
//Export model
module.exports = mogoose.model('Claimant', ClaimantSchema);