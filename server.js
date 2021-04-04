const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const admins = require("./admin.json");
const db = require("./app/models");

const app = express();

const Op = db.Sequelize.Op;
const Role = db.role;
const User = db.user;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
  createAdminAccounts();
});

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ofppt application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/demande.routes')(app);
require('./app/routes/upload.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function signinAdmin(admin) {
  User.create({
    username: admin.username,
    email: admin.email,
    firstname: admin.firstname,
    lastname: admin.lastname,
    region: admin.region,
    etablissement: admin.etablissement,
    etablissementCode: admin.etablissementCode,
    password: bcrypt.hashSync(admin.password, 8)
  })
    .then(user => {
      if (admin.roles.length==1) {
        user.setRoles([1]).then(() => {
          return;
        }).catch(err => {console.error(err)});
      }
      else if (admin.roles.length==2) {
        user.setRoles([2]).then(() => {
          return;
        }).catch(err => {console.error(err)});
      }
      else if (admin.roles.length==3) {
        user.setRoles([3]).then(() => {
          return;
        }).catch(err => {console.error(err)});
      }
      else {
        user.setRoles([4]).then(() => {
          return;
        }).catch(err => {console.error(err)});
      }
    }).catch(err => {
      console.error(err);
    });
}
function createAdminAccounts() {
  for(i=0; i<admins.length; i++) {
    admin = admins[i];
    signinAdmin(admin);
  }
}
function initial() {
    Role.create({
      id: 1,
      name: "vac"
    });
   
    Role.create({
      id: 2,
      name: "dic_eta"
    });
   
    Role.create({
      id: 3,
      name: "dic_reg"
    });
    Role.create({
      id: 4,
      name: "dic_glo"
    });
}