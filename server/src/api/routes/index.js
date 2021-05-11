/*
Import packages
*/
import express from 'express';

/*
Import custom packages
*/
import * as categoryController from '../controllers/category.controller.js';
import * as productController from '../controllers/product.controller.js';

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/
router.get('/categories', categoryController.getCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.get('/products', productController.getProducts);
router.get('/products/:productId', productController.getProductById);

export default router;
