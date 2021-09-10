var express = require('express');
var router = express.Router();

const categoryRouter = require('./categories/index');

// /devices/category
router.use("/categories", categoryRouter);

// devicesArr = []

// 기기 정보 업로드
// method : POST
// url : /devices
// body : { name: 'computer', version: 1.1, price: 32000 }
// response
// 200
// { message : '기기 정보 추가가 완료 되었습니다.' }

const devicesArr = [];

router.post('/', (req, res) => {
  const { name, version, price } = req.body;
  const devicesIdx = devicesArr.findIndex((item, index) => {
    return item.name === name;
  });
  if ( devicesIdx === -1 ) {
    devicesArr.push({
      name,
      version,
      price
    });
    res.status(200).json({
      message: '기기 정보 추가가 완료 되었습니다'
    });
  } else {
    // 기기 정보가 존재하는 경우
    res.status(400).json({
      message: '중복된 기기가 존재합니다'
    });
  }
  
});

// 기기 정보 조회
// method : GET
// url : /devices/:idx
// response
// 200
// { message : '기기 정보 조회 완료', data: 기기 정보 객체 }
// 401 { 기기 정보가 존재하지 않을 때 }
// { message: '기기 정보가 존재하지 않습니다.'}

router.get('/:idx', (req, res) => {
  
  const { idx } = req.params;
  const { name } = req.body;
  const deviceIdx = devicesArr.findIndex((item, index) => {
    return item.name === name;
  });

  if (idx < 0 || idx >= devicesArr.length)
    return res.status(409).json({
      message : "idx 에러"
    });
  
  if ( devicesArr[idx] ) {
    res.status(200).json({
      message: '기기 정보 조회 완료',
      data : result
    });
  } else {
    res.status(400).json({
      message: '기기 정보가 존재하지 않습니다.'
    });
  }
});

router.get('', (req, res) => {
  if (devicesArr.length === 0) {
    res.status(401).json({
      message: "기기 정보가 없습니다."
    });
  } else {
    res.status(200).json({
      message: "전체 조회 완료",
      data : devicesArr
    });
  }
});


// 기기 정보 수정
// method : PUT
// url : /devices/:idx
// body : { name: 'computer', version: 1.1, price: 40000 }

// response
// 200
// { message : '기기 정보 수정이 완료 되었습니다', data : 수정 된 정보 객체 }
// 400
// {message : '기기 정보가 존재하지 않습니다.'}

router.put('/:idx', (res, req) => {
  const { idx } = req.params;
  const { name, version, price } = req.body;

  if (devicesArr[idx]) {
    devicesArr[idx] = {name, version, price};
    res.status(200).json({
      message : '기기 정보 수정이 완료 되었습니다.',
      data : devicesArr[idx]
    });

  } else {
    res.status(400).json({
      message : '기기 정보가 존재하지 않습니다.'
    });
  }
});

// 기기 정보 삭제
// method : DELETE
// url : /devices/:idx
//response
// 200
// {message : '기기 삭제가 완료 되었습니다.}
// 400
// {message : '기기 정보가 존재하지 않습니다.'}

router.delete('/:idx', (req, res) => {
  const { idx } = req.params;

  if (devicesArr[idx]) {
    // 기기 정보 있음
    devicesArr.splice(idx, 1);
    res.status(200).json({
      message : '기기 삭제가 완료 되었습니다.'
    });
  } else {
    // 기기 정보 없음
    res.status(400).json({
      message : '기기 정보가 존재하지 않습니다.'
    });
  }
});


module.exports = router;