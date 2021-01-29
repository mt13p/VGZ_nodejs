var mogoose = require('mongoose');
const {DateTime}=require("luxon");
var Schema  = mogoose.Schema;
var LetterSchema = new Schema(
    {
        date: {type: Date, required: true, default: Date.now},
        sender: {type: Schema.ObjectId, ref: 'Sender', required: true},
        official: {type: Schema.ObjectId, ref: 'Official', required: true},
        executant: {type: Schema.ObjectId, ref: 'Executant', required: true}
    }
);
//Virtual URL
LetterSchema
.virtual('url')
.get(function() {
    return '/permit/letter/' + this._id;
});

LetterSchema
.virtual('date_formatted')
.get(function() {
    return DateTime.fromJSDate(this.date).toISODate();
});

//Export model
module.exports = mogoose.model('Letter', LetterSchema);

// db.letters.insert({date: new Date(), sender: ObjectId("6012e8bf57f42b1864f87b2d"), official: "", executant: ""})