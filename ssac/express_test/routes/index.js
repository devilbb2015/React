const express = require('express');
const router = express.Router();

const postsRouter = require("./posts/index");
const usersRouter = require("./users/index");
const commentsRouter = require("./repies/index");

// use를 사용하여 어떠한 메소드(get, post, delete 등등) 가 들어오더라도 처리 됨.
// /posts
router.use("/posts", postsRouter);
// /users
router.use("/users", usersRouter);
// /comments
router.use("/comments", commentsRouter);




module.exports = router;
