const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
// (node:12552) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
//  change operatorsAliases: false to operatorsAliases: 0
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.demande = require("../models/demande.model.js")(sequelize, Sequelize);
db.file = require("./file.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.demande.belongsToMany(db.user, {
  through: "user_demandes",
  foreignKey: "demandeId",
  otherKey: "userId"
});
db.file.belongsToMany(db.user, {
  through: "user_files",
  foreignKey: "fileId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.user.belongsToMany(db.demande, {
  through: "user_demandes",
  foreignKey: "userId",
  otherKey: "demandeId"
});
db.user.belongsToMany(db.file, {
  through: "user_files",
  foreignKey: "userId",
  otherKey: "fileId"
});

db.ROLES = ["vac", "dic_eta", "dic_reg", "dic_glo"];

module.exports = db;