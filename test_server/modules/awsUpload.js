let AWS = require("aws-sdk");
const path = require("path");
AWS.config.loadFromPath(__dirname + "/..config/awsConfig.json"); // 인증

let s3 = new AWS.S3();
let multer = require("multer");
let multerS3 = require("multer-s3");

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "ssaclee",
    key: function (req, file, cb) {
      let extention = path.extname(file.originalname);
      cb(null, Data.now().toString() + extension);
    },
    acl: "public-read-write",
  }),
});

module.exports = upload;
