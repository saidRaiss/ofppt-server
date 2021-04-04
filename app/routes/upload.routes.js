// const { upload } = require("../middleware");
multer = require('multer')
const controller = require("../controllers/upload.controller");

// module.exports = function(app) {
//     app.use(function(req, res, next) {
//       res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//       );
//       next();
//     });
  
//     app.post(
//       "/api/demande/upload",
//       controller.uploadFiles
//     );
    // app.post(
    //   "/api/demande/upload",
    //   upload.single("file"),
    //   controller.uploadFiles
    // );
// };
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './app/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
module.exports = function(app) {
  app.post(
    '/api/demande/upload',
    multer({ storage }).single('file'),
    controller.uploadFiles
  )
} 