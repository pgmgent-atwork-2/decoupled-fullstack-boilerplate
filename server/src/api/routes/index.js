/*
Import packages
*/
import express from 'express';

/*
Import custom packages
*/
import * as categoryController from '../controllers/category.controller';
import * as productController from '../controllers/product.controller';

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/
router.get('/categories', categoryController.getCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.post('/categories', categoryController.createCategory);

router.get('/products', productController.getProducts);
router.get('/products/:productId', productController.getProductById);

export default router;
