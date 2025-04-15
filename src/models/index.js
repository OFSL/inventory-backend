const Sequelize = require('sequelize');
const ItemModel = require('./item')

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = async () => {
  const connection = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: 'postgres',
    logging: true,
  });

  try {
    await connection.authenticate()
    console.log('Database connection OK!')

    const Item = ItemModel(connection, Sequelize)

    await connection.sync({ alter: true });

    return {
        Item
    };
  } catch (err) {
    console.error('Failed to set up the database:', err)
  }

};

module.exports = setupDatabase();