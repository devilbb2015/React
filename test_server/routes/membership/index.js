var express = require("express");
const membershipController = require("../../controllers/membership/membershipControllers");
var router = express.Router();
const upload = require("../../modules/awsUpload");

// 이미지 업로드
router.post("/images", upload.single("img"), membershipController.uploadImage);

// membership 업로드
router.post("/gender", membershipController.uploadMembership);

router.get("/:gender", membershipController.detailMemberShip);

module.exports = router;
