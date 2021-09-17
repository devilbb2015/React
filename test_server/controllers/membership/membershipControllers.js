const membershipController = {
  detailMemberShip: (req, res) => {
    const { gender } = req.params;
    const sql = "select * from membership where gender=?";
    const paramas = [Number(gender)];

    if (Number(gender) === 0 || Number(gender) === 1) {
      con.query(sql, paramas, (err, result) => {
        if (err)
          return res.status(400).json({
            message: "조회 실패",
          });

        res.status(200).json({
          message: "조회 성공",
          data: result,
        });
      });
    } else {
      // gender 값이 올바르지 않은 경우
      res.status(401).json({
        message: "옳지 않은 gender 값 입니다.",
      });
    }
  },

  uploadImage: (req, res) => {
    const img = req.file;
    if (img) {
      res.status(200).json({
        message: "이미지 업로드 완료",
        imgUrl: "img.location",
      });
    } else {
      res.status(400).json({
        message: "이미지 업로드 실패",
      });
    }
    console.log(img);
  },

  uploadMembership: (req, res) => {
    const { gender, title, img } = req.body;
    const sql = "insert into membership values (?, ?, ?)";
    const params = [gender, title, img];

    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "에러가 발생 했습니다.",
        });
      res.status(200).json({
        message: "생성이 완료 되었습니다.",
      });
    });
  },
};

module.exports = membershipController;
