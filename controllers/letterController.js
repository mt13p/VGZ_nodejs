var Letter = require('../models/letter');
var Claimant = require('../models/claimant');
var Sender = require('../models/sender');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        letter_count: function(callback) {
            Letter.collection.countDocuments({}, callback);
        },
        claimant_count: function(callback) {
            Claimant.collection.countDocuments({}, callback);
        },
        sender_count: function(callback) {
            Sender.collection.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Система надання дозволу на неоскарження', error: err, data: results });
    });

};
exports.letter_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Letter list');
    Letter.find({}, 'sender')
        //.populate('date')
        .exec(function(err, list_letter){
            if (err) {return next(err); }
            res.render('letter_list', {title:'Всі листи', letter_list: list_letter});
        })
};
exports.letter_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Letter detail:' + req.params.id);
};
exports.letter_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Letter create GET');
};
exports.letter_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Letter create POST');
};
exports.letter_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Letter delete GET');
};
exports.letter_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Letter delete POST');
};
exports.letter_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Letter update GET');
};
exports.letter_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Letter update POST');
};