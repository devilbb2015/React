var express = require('express');
var router = express.Router();

const postsRouter = require('./posts/index');
const usersRouter = require('./users/index');

router.use('./', postsRouter);
router.use('./', usersRouter);

module.exports = router;
