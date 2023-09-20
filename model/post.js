const db = require("./banco");

const Listas = db.conect.define("contatos", {
  nome: {
    type: db.Sequelize.STRING,
  },
  tel: {
    type: db.Sequelize.INTEGER,
  },
  observacao: {
    type: db.Sequelize.TEXT,
  },
});
Listas.sync({ force: true });
module.exports = Listas;
