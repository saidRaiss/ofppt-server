// const multer = require("multer");

// const imageFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("file")) {
//     cb(null, true);
//   } else {
//     cb("Please upload only files.", false);
//   }
// };

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, __basedir + "/storage/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
//   },
// });

// var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
// module.exports = uploadFile;