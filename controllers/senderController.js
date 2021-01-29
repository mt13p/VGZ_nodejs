var Sender = require('../models/sender');
var Letter = require('../models/letter');
var async = require('async');

const {body, validationResult} = require("express-validator");
const { getMaxListeners, replaceOne } = require('../models/sender');


function validatorNoSpace (val) {
    const Valstring =val+'';
    const valNoSpaces = Valstring.split(' ').join('');
    console.log(Valstring);
    return body(valNoSpaces).isAlphanumeric(['uk-UA']).withMessage('Назва адресанта має бути текстом!');

 };

exports.sender_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Sender list');
    Sender.find({},{name:1, legalservice:1})
//    Sender.find()
 //   .populate('name') //,'legalservice'
    .exec(function(err, list_sender){
        if (err) {return next(err); }
        res.render('sender_list', {title:'Всі адресанти', sender_list: list_sender});
    })
};
exports.sender_detail = function(req, res, next) {
   // res.send('NOT IMPLEMENTED: Sender detail:' + req.params.id);
   async.parallel({
       sender: function(callback) {
           Sender.findById(req.params.id)
           .exec(callback);
       },
   }, function(err, results) {
        if (err) {return next(err); }
        if (results.sender==null) {
            var err = new Error('Адресанти не знайдені');
            err.status = 404;
            return next(err);
        }
        res.render('sender_detail', {title: "Детально про адресанта", sender: results.sender})
   });
};
exports.sender_create_get = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Sender create GET');
    res.render('sender_form', {title:'Створити адресанта'});
};
exports.sender_create_post = [
    //res.send('NOT IMPLEMENTED: Sender create POST');

    body('name')
        .trim()
        .isLength({ min: 1 }).escape().withMessage('Назва адресанта обовязкова!')
        .isAlpha('uk-UA', " -").withMessage('Назва адресанта має бути текстом!'),
    // validatorNoSpace(body.name),
    body('legalservice')
        .trim()
        .isLength({ min: 1 }).escape().withMessage('Найменування юридичного підрозділу обовязкова!')
        .isAlpha('uk-UA'," -").withMessage('Найменування юристів має бути текстом!'),
    (req, res, next) => {
        const errors = validationResult(req);

        var sender = new Sender(
            {name: req.body.name,
            legalservice: req.body.legalservice}
        );

        if (!errors.isEmpty()) {
            res.render('sender_form', {title:'Створити адресанта', name: req.body, errors: errors.array()});
            return;
        }
        else {
            Sender.findOne({'name': req.body.name})
            .exec(function(err, found_sender){
                if (err) {return next(err);}

                if (found_sender) {
                    res.redirect(found_sender.url);
                }
                else {
                    sender.save(function(err) {
                        if (err) {return next(err);}
                        res.redirect(sender.url);
                    });
                }
            });
        }

    }
];
exports.sender_delete_get = function(req, res, next) {
    // res.send('NOT IMPLEMENTED: Sender delete GET');
    async.parallel({
        sender: function(callback){
            Sender.findById(req.params.id).exec(callback)
        },
        senders_letters: function(callback){
            Letter.find({'sender': req.params.id}).exec(callback)
        },
    }, function(err, results){
        if(err) {return next(err);}
        if(results.sender==null){
            res.redirect('/permit/senders');
        }
        res.render('sender_delete', {title: 'Видалення адресанта', sender: results.sender, sender_letters: results.senders_letters});
    });
};
exports.sender_delete_post = function(req, res, next) {
    // res.send('NOT IMPLEMENTED: Sender delete POST');
    async.parallel({
        sender: function(callback){
            Sender.findById(req.body.sendrid).exec(callback)
        },
        senders_letters: function(callback){
            Letter.find({'sender': req.body.senderid}).exec(callback)
        },
    }, function(err, results){
        if(err) {return next(err);}
        if(results.senders_letters.length>0){
            res.render('sender_delete', {title: 'Видалення адресанта', sender: results.sender, sender_letters: results.senders_letters});
            return;
        }
        else {
            Sender.findByIdAndRemove(req.body.senderid, function deleteSender(err){
                if (err) {return next(err);}
                res.redirect('/permit/senders')
            })
        }
    });
};
exports.sender_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Sender update GET');
};
exports.sender_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Sender update POST');
};