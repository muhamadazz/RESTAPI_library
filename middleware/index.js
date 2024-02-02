var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verification = require('./verification');

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registration);
router.post('/api/v1/login', auth.login); 

// alamat yang perlu otorisasi
router.get('/api/v1/secret', verification(2), auth.secretPage);

module.exports = router;