// SEND Roles in request
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    firstname:{
      type: Sequelize.STRING
    },
    lastname:{
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    etablissement: {
      type: Sequelize.STRING
    },
    etablissementCode: {
      type: Sequelize.STRING
    },
    region: {
      type: Sequelize.STRING
    }
  });

  return User;
};