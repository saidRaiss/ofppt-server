module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("files", {
        email: {
            type: Sequelize.STRING
        },
        path: {
            type: Sequelize.STRING
        }
    });
  
    return File;
};
// module.exports = (sequelize, DataTypes) => {
//     const File = sequelize.define("files", {
//         email: {
//             type: DataTypes.STRING
//         },
//         type: {
//             type: DataTypes.STRING,
//         },
//         name: {
//             type: DataTypes.STRING,
//         },
//         data: {
//             type: DataTypes.BLOB("long"),
//         },
//     });
  
//     return File;
// };