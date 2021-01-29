var mogoose = require('mongoose');
var Schema  = mogoose.Schema;
var SubjectSchema = new Schema(
    {
        name: {type: String, required: true}
    }
);
//Virtual URL
SubjectSchema
.virtual('url')
.get(function() {
    return '/permit/subject/' + this._id;
});
//Export model
module.exports = mogoose.model('Subject', SubjectSchema);