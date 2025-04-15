module.exports = (connection, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    type: DataTypes.STRING,
    barcode: DataTypes.STRING,
    condition: DataTypes.STRING,
    status: DataTypes.STRING,
    photoPath: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    lastModified: DataTypes.INTEGER,
  };

  const ItemModel = connection.define('item', schema);
  return ItemModel;
};
