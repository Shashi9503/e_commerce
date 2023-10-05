import express from 'express';
import ProductsController from '../dao/products.controller.js';

const router = express.Router();

router.route('/').get(ProductsController.apiGetProducts);

export default router;