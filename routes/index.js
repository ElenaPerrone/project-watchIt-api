const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.json({message: 'we are communicating!' });
});

module.exports = router;
