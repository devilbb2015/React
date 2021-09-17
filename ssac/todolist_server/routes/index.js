var express = require("express");
const con = require("../modules/mysql");
var router = express.Router();

const todosRouter = require("./todos/index");

router.get("/", (req, res) => {
  con.connect();
  con.query("select * from ssac_todolist", (err, result, fields) => {
    if (err)
      return res.status(400).json({
        message: "조회 실패~!",
      });
    res.status(200).json({
      message: "조회 성공~!",
      data: result,
    });
  });
  con.end();
});

// router.get("/", (req, res) => {
//   con.query("select * from ssac_todolist", (err, result, fields) => {
//     if (err) return res.status(400).json({
//       message : "조회 실패~!"
//     });
//     res.status(200).json({
//       message : "조회 성공~!",
//       data : result
//     });
//   });
// });

router.use("/todos", todosRouter);

module.exports = router;
