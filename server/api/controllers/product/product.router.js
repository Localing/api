import * as express from 'express';
import productController from './product.controller';

export default express
    .Router()
    .post('/', productController.create)
    .get('/:businessId', productController.all)
    .get('/:businessId/:productId', productController.byId)
    .put('/:id', productController.update)
    .delete('/:id', productController.delete)