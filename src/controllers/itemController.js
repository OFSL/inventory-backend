const { Item } = require('../models');

const createItem = async (req, res) => {
  await Item.create(req.body).then((items) => {
    res.status(201).json(items);
  });
};

const getItems = async (req, res) => {
  await Item.findAll().then((items) => {
    res.status(200).json(items);
  });
};

const getItemByID = async (req, res) => {
  const item = await Item.findByPk(req.params.id);

  res.status(200).json(item);
};

const getItemByBarcode = async (req, res) => {
  const item = await Item.findAll({
    where: {
      barcode: req.params.barcode,
    },
  });

  res.status(200).json(item);
};

const getItemByCategory = async (req, res) => {
  const item = await Item.findAll({
    where: {
      category: req.params.category,
    },
  });

  res.status(200).json(item);
};

const getItemByStatus = async (req, res) => {
  const item = await Item.findAll({
    where: {
      status: req.params.status,
    },
  });

  res.status(200).json(item);
};

module.exports = {
  createItem,
  getItems,
  getItemByID,
  getItemByBarcode,
  getItemByCategory,
  getItemByStatus,
};
