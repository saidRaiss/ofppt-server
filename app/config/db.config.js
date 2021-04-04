module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "raissroot",
    DB: "ofppt",
    dialect: "postgres",
    POST: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };