const Sequelize = require('sequelize');
const ItemModel = require('./item');

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: 'postgres',
    logging: true,
  });

  const Item = ItemModel(connection, Sequelize);

  connection.sync({ alter: true });
  return {
    Item
  };
};

module.exports = setupDatabase();
