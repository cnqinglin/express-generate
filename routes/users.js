var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users 发起这句话');
});

router.get('/xxx', function(req, res, next) {
  res.send('users/xxx 发起这句话');
});

module.exports = router;
