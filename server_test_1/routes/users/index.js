const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.json({
    username: "lee"
  });
});

router.post('/', (req,res) => {
  console.log(req.body);

  // 비구조화 할당 (구조분해할당)
  const {username, age, address, sns} = req.body;


  // // 유저 이름
  // const username = req.body.username;
  // // 나이
  // const age = req.body.age;
  // // 주소
  // const address = req.body.address;
  // // sns
  // const sns = req.body.sns;

  res.json({
    content: "유저 생성 완료",
    profile: `내 이름은 ${username} 이고 나이는 ${age} 이고, 사는 곳은 ${address} 이고, sns는 ${sns} 사용해`
  });
});

router.delete('/:username/:sns', (req,res) => {
  const { username, sns } = req.params;
  console.log(username);
  console.log(sns);

  res.json({
    content: "유저 삭제 완료"
  });
});

module.exports = router;
