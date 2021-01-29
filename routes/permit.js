var express = require('express');
var router = express.Router();

var claimant_controller = require('../controllers/claimantController');
var letter_controller = require('../controllers/letterController');
var official_controller = require('../controllers/officialController');
var sender_controller = require('../controllers/senderController');
var court_controller = require('../controllers/courtController');
var action_controller = require('../controllers/actionController');
var subject_controller = require('../controllers/subjectController');

router.get('/', letter_controller.index);

router.get('/claimants', claimant_controller.claimant_list);
router.get('/claimant/create', claimant_controller.claimant_create_get);
router.post('/claimant/create', claimant_controller.claimant_create_post);
router.get('/claimant/:id', claimant_controller.claimant_detail);
router.get('/claimant/:id/delete', claimant_controller.claimant_delete_get);
router.post('/claimant/:id/delete', claimant_controller.claimant_delete_post);
router.get('/claimant/:id/update', claimant_controller.claimant_update_get);
router.post('/claimant/:id/update', claimant_controller.claimant_update_post);

router.get('/letters', letter_controller.letter_list);
router.get('/letter/create', letter_controller.letter_create_get);
router.post('/letter/create', letter_controller.letter_create_post);
router.get('/letter/:id', letter_controller.letter_detail);
router.get('/letter/:id/delete', letter_controller.letter_delete_get);
router.post('/letter/:id/delete', letter_controller.letter_delete_post);
router.get('/letter/:id/update', letter_controller.letter_update_get);
router.post('/letter/:id/update', letter_controller.letter_update_post);

router.get('/officials', official_controller.official_list);
router.get('/official/create', official_controller.official_create_get);
router.post('/official/create', official_controller.official_create_post);
router.get('/official/:id', official_controller.official_detail);
router.get('/official/:id/delete', official_controller.official_delete_get);
router.post('/official/:id/delete', official_controller.official_delete_post);
router.get('/official/:id/update', official_controller.official_update_get);
router.post('/official/:id/update', official_controller.official_update_post);

router.get('/senders', sender_controller.sender_list);
router.get('/sender/create', sender_controller.sender_create_get);
router.post('/sender/create', sender_controller.sender_create_post);
router.get('/sender/:id', sender_controller.sender_detail);
router.get('/sender/:id/delete', sender_controller.sender_delete_get);
router.post('/sender/:id/delete', sender_controller.sender_delete_post);
router.get('/sender/:id/update', sender_controller.sender_update_get);
router.post('/sender/:id/update', sender_controller.sender_update_post);

router.get('/courts', court_controller.court_list);
router.get('/court/create', court_controller.court_create_get);
router.post('/court/create', court_controller.court_create_post);
router.get('/court/:id', court_controller.court_detail);
router.get('/court/:id/delete', court_controller.court_delete_get);
router.post('/court/:id/delete', court_controller.court_delete_post);
router.get('/court/:id/update', court_controller.court_update_get);
router.post('/court/:id/update', court_controller.court_update_post);

router.get('/actions', action_controller.action_list);
router.get('/action/create', action_controller.action_create_get);
router.post('/action/create', action_controller.action_create_post);
router.get('/action/:id', action_controller.action_detail);
router.get('/action/:id/delete', action_controller.action_delete_get);
router.post('/action/:id/delete', action_controller.action_delete_post);
router.get('/action/:id/update', action_controller.action_update_get);
router.post('/action/:id/update', action_controller.action_update_post);

router.get('/subjects', subject_controller.subject_list);
router.get('/subject/create', subject_controller.subject_create_get);
router.post('/subject/create', subject_controller.subject_create_post);
router.get('/subject/:id', subject_controller.subject_detail);
router.get('/subject/:id/delete', subject_controller.subject_delete_get);
router.post('/subject/:id/delete', subject_controller.subject_delete_post);
router.get('/subject/:id/update', subject_controller.subject_update_get);
router.post('/subject/:id/update', subject_controller.subject_update_post);

module.exports = router;