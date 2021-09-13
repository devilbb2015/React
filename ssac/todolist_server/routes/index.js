const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const todosRouter =require("./todos/index");

router.use("/todos", todosRouter);



module.exports = router;
