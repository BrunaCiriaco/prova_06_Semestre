const Sequelize = require("sequelize");
const conect = new Sequelize("agendas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  conect: conect,
};
