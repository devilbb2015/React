const express = require('express');
const router = express.Router();

// * Request
// method : GET
// url : /posts

// * Response
// {
//   message : '조회 성공~!!'
// }

router.get("/", (req, res) => {
  res.status(200).json({
    message : '조회 성공~!!'
  });
});

// /qqqq/?name=lee&age=29&like=kimchi
router/get("/qqqq", (req, res) => {
  const { name, age, like } = req.query; // { name: 'lee', age: '29', like: 'kimchi'}

  console.log(`like: ${like}, age: ${age}, name: ${name}`);
});

// * Request
// method : GET
// url : /posts/:id

// * Response
// - id 값이 0번일 때는
// status Code 404
// {
//   message : "해당 게시물이 존재하지 않습니다."
// }
// 그 이외
// status Code 200
// {
//   message : 게시물 조회 성공"
// }

router.get("/:id", (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  if (id === "0") {
    res.status(404).json({
      message : "해당 게시물이 존재하지 않습니다."
    });
  } else {
    res.status(200).json({
      message : "게시물 조회 성공"
    });
  }
});

module.exports = router;