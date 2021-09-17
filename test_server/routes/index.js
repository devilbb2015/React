var express = require('express');
var router = express.Router();

const membershipRouter = require('./membership/index');

router.use('/membership', membershipRouter)

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/", (req, res) => {
//   // 전체 데이터 조회
//   con.query("select * from ssac_todolist", (err, result, fields) => {
//     if (err)
//       return res.status(400).json({
//         message: "조회 실패",
//       });

//     res.status(200).json({
//       message: "조회 성공",
//       data: result,
//     });
//   });
// });



module.exports = router;
