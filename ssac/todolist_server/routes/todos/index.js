var express = require('express');
var router = express.Router();

let todolistArr = [
  
];

// todoList 생성
// method : POST
// url : /todos
// body: { id : 0 (number), todoContent : "할 일 (Text)"}
// response
// 200
// { message: '생성이 완료 되었습니다' , data : [id: 0, todoContent: '내일 할일'] }
// 400
// { message: '생성에 실패했습니다' }

router.post('/', (req, res) => {
  const { id, todoContent } = req.body;

  const todoIdx = todolistArr.findIndex((item, index) => 
    item.id === Number(id)
  );

  if (todoIdx === -1 ) {
    // 해당 게시물이 존재하지 않는다.
    todolistArr.push({
      id,
      todoContent
    });
    res.status(200).json({
      message : "생성이 완료 되었습니다",
      data : todolistArr
    });
  } else {
    // 해당 게시물이 존재
    res.status(400).json( {
      message : "생성에 실패했습니다."
    });
  }
});

// todoList 전체 조회
// method : GET
// url : /todos
// response
// 200
// { message: '전체 조회 완료' , data : [ {id: 0, todoContent: '내일 할일'}, {id: 1, todoContent: '내일 할일'}]}
// 400
// { message: '등록된 할 일이 없습니다.' }

 router.get('/', (req, res) => {
   todolistArr = [];
   res.status(200).json({
     message: "천체 초기화 완료",
     data : []
   });
   
  //  if(todolistArr.length === 0 ) {
  //    // 빈 배열
  //    res.status(400).json({
  //      message : "조회에 실패 했습니다."
  //    });
  //  } else {
  //    // 존재 하는 경우
  //    res.status(200).json({
  //      message : "전체 조회 완료",
  //      data : todolistArr
  //    });
  //  }
 });

// todoList 수정 (id)
// method : PUT
// url : /todos/:id
// body: { todoContent : "수정된 할 일 (Text)"}
// params : { id : 0 } 
// response
// 200
// { message: '등록된 할 일이 수정 되었습니다' , data : [id: 0, todoContent: '내일 할일'] }
// 400
// { message: '등록된 할 일이 없습니다.' }
// 401
// { message: '할 일이 수정실패 하였습니다.'}

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { todoContent } = req.body;

  const todoIdx = todolistArr.findIndex((item, index) => 
    item.id === Number(id)
  );

  if ( todolistArr.length === 0 )
    res.status(401).json({
      message : "등록된 할 일이 없습니다."
    });

  if (todoIdx === -1) {
    // 정보가 존재하지 않을 경우
    res.status(400).json({
      message : '할 일이 수정실패 하였습니다.'
    });
    // 정보가 존재 할 경우
    todolistArr[todoIdx] = { id : Number(id), todoContent };
    res.status(200).json({
      message : "수정완료.",
      data : todolistArr
    });
  }
});

// todoList 삭제 (id)
// method : DELETE
// url : /todos/:id
// params : { id : 0 }
// response
// 200
// { message: '등록된 할 일이 삭제 되었습니다.' }
// 400
// { message: '삭제 실패하였습니다' }

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  const todoIdx = todolistArr.findIndex((item, index) => 
    item.id === Number(id)
  );

  if ( todoIdx === -1 ) {
    // 정보가 존재하지 않을 경우
    res.status(400).json({
      message: "삭제 실패하였습니다."
    });
  } else {
    // 정보가 존재하는 경우
    todolistArr.splice(todoIdx, 1);
    res.status(200).json({
      message: "삭제가 완료 되었습니다",
      data : todolistArr
    });
  }
});


module.exports = router;