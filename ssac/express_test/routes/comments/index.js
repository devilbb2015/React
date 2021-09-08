const express = require('express');
const router = express.Router();

const commentsArr = [];

// 댓글을 추가하는 라우터
router.post("/", (req, res) => {
  res.status(200).json ({
    message : "댓글 추가 완료"
  })
});

// 전체 댓글을 조회하는 라우터
router.get("/", (req, res) => {
    res.status(200).json ({
    message : "전체 댓글 조회 완료",
    data : commentsArr
  })
});

// 특정 댓글(idx)를 조회하는 라우터
router.get("/:idx", (req, res) => {
  const {idx} = req.params;
  if (idx === "0") {
    res.status(400).json({
      message : "해당 댓글이 존재하지 않습니다."
    });
  } else {
    res.status(200).json({
      message : "특정 댓글 조회 완료"
    });
  }
});

// 특정 댓글(idx)을 댓글을 삭제하는 라우터
router.delete("/:idx", (req, res) => {
  const {idx} = req.params;

  if ( idx < 0 || idx >= commentsArr.length) {
    res.status(400).json({
      message: "올바르지 않은 index 값 입니다."
    });
  }

  if (commentsArr[idx]) {
    commentsArr.splice(idx, 1);
    res.status(200).json({
      message: "특정 댓글 삭제 완료",
      data : commentsArr
    });
  } else {
    res.status(400).json({
      message: "댓글을 찾을 수 없습니다."
    });
  }

});

// 특정 댓글(idx)을 수정하는 라우터
router.put("/:idx", (res, req) => {
  const { idx } = req.params;
  const { txt } = req.body;

  if ( idx < 0 || idx >= commentsArr.length) {
    res.status(400).json({
      message: "올바르지 않은 index 값 입니다."
    });
  }

  if (commentsArr[idx]) {
    commentsArr[idx] = { txt };
    res.status(200).json({
      message : "특정 댓글 수정 완료",
      data : commentsArr[idx]
    });
  } else {
    res.status(400).json({
      message: "댓글을 찾지 못했습니다."
    });
  }
});

// 특정 댓글(idx)를 신고하는 라우터
// { message : "특정 댓글 신고 완료" }
router.put("/:idx/declare", (req, res) => {
  res.status(200).json({
    message: "특정 댓글 신고 완료"
  });
});

module.exports = router;