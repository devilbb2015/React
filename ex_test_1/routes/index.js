var express = require('express');
var router = express.Router();

const con = require("../modules/mysql");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", (req, res) => {
  con.query("select * from membership", (err, result, fields) => {
    if (err) return res.status(400).json({
      message : "조회 실패~!"
    });
    res.status(200).json({
      message : "조회 성공~!",
      data : result
    });
  });
});

module.exports = router;
