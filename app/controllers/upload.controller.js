const fs = require("fs");

const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const File = db.file;
uploadFiles = async (req, res) => {
  // This needs to be done elsewhere. For this example we do it here.
  await sequelize.sync()

  const filePath = `${req.file.destination}/${req.file.filename}`

  const File = await File.create({ filePath })
}
// const uploadFiles = async (req, res) => {

//     console.log("req.file", req.file);
//     console.log("req.body.file", req.body.file);
//     console.log("req.body", req.body);
//     console.log("req", req);


//     if (req.file == undefined) {
//       return res.send(`You must select a file.`);
//     }

//     File.create({
//     email:req.email,
//       type: req.file.mimetype,
//       name: req.file.originalname,
//       data: fs.readFileSync(
//         __basedir + "/storage/" + req.file.filename
//       ),
//     }).then(file => {
//         User.findOne({
//             where: {
//               email: req.email
//             }
//         }).then(user => {
//             user.getFiles().then(files => {
//                 for (let i = 0; i < files.length; i++) {
//                     File.destroy({
//                         where: {
//                             name: files[i].name
//                           }
//                     });
//                 }
//                 user.setFiles(file).then(() =>{
//                     fs.writeFileSync(
//                         __basedir + "/storage/tmp/" + file.name,
//                         file.data
//                       );
                
//                       return res.send(`File has been uploaded.`);
//                 }).catch(err => {
//                     console.log(err)
//                 })
//             }).catch(err => {
//                 console.log(err);
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => {
//         console.log(err)
//     });
// };

module.exports = {
  uploadFiles
};