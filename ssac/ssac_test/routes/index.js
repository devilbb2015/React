var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const devicesRouter = require('./devices/index');

// /devices
router.use("/devices", devicesRouter);



module.exports = router;
