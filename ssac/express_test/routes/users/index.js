const express = require('express');
const router = express.Router();

// 유저 생성 (Create)
// method : POST
// url : /users
// body : { name: 'lee', age : 26, love: 'kimchi'}

// response
// 중복된 이름이 있는 경우
// { message : '중복된 이름이 존재합니다.'}

// 유저 생성이 잘 되었을 경우
// { message : '유저가 성공적으로 생성 되었습니다.'}

const usersArr = [];

router.post("/", (req, res) => {
  const { name, age, love } = req.body;

  // 존재하지 않으면 -1, 있으면 index 를 return
  const userIdx = usersArr.findIndex((item, index) => {
    // item = { name: 'lee', age : 26, love: 'kimchi'}
    return item.name === name;
  });

  if ( userIdx === -1 ) {
    // 기존 배열에 해당하는 유저 정보가 없는 것
    // usersArr.pust(req.body);  => req.body로 설정되어 있어 직접 넣어도 됨.
    usersArr.push({
      name,
      age,
      love
    });

    res.status(200).json({
      message : '유저가 성공적으로 생성 되었습니다.'
    });
  } else {
    res.status(409).json({
      message : '중복된 이름이 존재합니다.'
    });
  }
});

// 유저 전체 조회
router.get("/", (res, req) => {
  res.status(200).json({
    message: "전체 데이터 조회 완료",
    data: usersArr
  });
});

// 유저 이름을 받아서 조회 (Read)
// method : GET
// url : /users/:name

// response
// 해당 유저가 있을 경우
// status 200
// { message : '유저를 찾았습니다', data : { name : 'lee', age: '40', love: 'singing'} }

// 해당 유저가 없을 경우
// status 404
// { message : '유저 정보가 없습니다.'}

router.get("/:name", (req, res) => {
  const {name} = req.params;

  
  const userIdx = usersArr.findIndex((item, index) => {
    // item = { name: 'lee', age : 26, love: 'kimchi'}
    return item.name === name;
  });

  if (userIdx === -1 ) {
    // 유저가 없는 경우
    res.status(404).json({
      message : '유저 정보가 없습니다.'
    });
  } else {
    // 유저가 있는 경우
    const result = usersArr[userIdx];  // 결과 값
    res.status(200).json({
      message : '유저를 찾았습니다.',
      data : result
    });
  }
});

// 유저 수정 (update)
// method : PUT
// url : /users/:idx
// body : {name: 'lee', age: 22, love: 'game'}\

// response
// 유저를 잘 찾았을 때
// { message : '수정 완료', data: 해당 유저 데이터 }

// 유저를 못 찾았을 때
// status 400
// { message : '유저를 찾지 못 했습니다.' }

router.put("/:idx", (res, req) => {
  const { idx } = req.params;
  const { name, age, love } = req.body;

  if (usersArr[idx]) {
    // 유저가 있을 경우
    usersArr[idx] = { name, age, love };  // {name: name, age: age, love: love}
    res.status(200).json({
      message : "수정 완료",
      data : usersArr[idx]
    });
  } else {
    // 유저가 없을 경우
    res.status(400).json({
      message: "유저를 찾지 못했습니다."
    });
  }
});


// 유저 삭제 (delete)
// method : this.delete
// url : /users/:idx

// response
// status 200
// { message : "삭제 성공", data : usersArr }

// 400
// { message : "유저를 찾을 수 없습니다." }

router.delete("/:idx", (req, res) => {
  const { idx } = req.params;

  if ( idx < 0 || idx >= usersArr.length) {
    res.status(400).json({
      message: "올바르지 않은 index 값 입니다."
    });
  }

  if (usersArr[idx]) {
    // 유저가 있다
    usersArr.splice(idx, 1);
    res.status(200).json({
      message: "삭제 성공",
      data : usersArr
    });
  } else {
    // 유저가 없다
    res.status(400).json({
      message: "유저를 찾을 수 없습니다."
    });
  }
});



module.exports = router;