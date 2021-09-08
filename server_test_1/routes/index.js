var express = require('express');
var router = express.Router();

const postsRouter = require('./posts/index');
const usersRouter = require('./users/index');

router.use('/posts', postsRouter);
router.use('/users', usersRouter);

module.exports = router;
