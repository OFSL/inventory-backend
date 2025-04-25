const { Router } = require('express');
const itemController = require('../controllers/itemController');

const router = new Router();

router.route('/').get(itemController.getItems).post(itemController.createItem);

router.route('/:id').get(itemController.getItemByID);

router.route('/barcode/:barcode').get(itemController.getItemByBarcode);

router.route('/category/:category').get(itemController.getItemByCategory);

router.route('/status/:status').get(itemController.getItemByStatus);

module.exports = router;
