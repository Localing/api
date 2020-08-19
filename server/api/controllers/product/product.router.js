import * as express from 'express';
import productController from './product.controller';

export default express
    .Router()
    .post('/:businessId', productController.create)
    .get('/:businessId', productController.all)
    .get('/:businessId/:productId', productController.byId)
    .delete('/:businessId/:productId', productController.delete)
    .put('/:businessId/:productId', productController.update)