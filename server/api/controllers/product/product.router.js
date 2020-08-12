import * as express from 'express';
import productController from './product.controller';

export default express
    .Router()
    .post('/', productController.create)
    .get('/', productController.all)
    .get('/:id', productController.byId)
    .put('/:id', productController.update)
    .delete('/:id', productController.delete)