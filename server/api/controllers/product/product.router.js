import * as express from 'express';
import productController from './product.controller';
import authorizer from '../../middlewares/authorizer';

export default express
    .Router()
    .post('/:businessId', authorizer.verifyBusiness, productController.create)
    .get('/:businessId', productController.all)
    .get('/:businessId/:productId', productController.byId)
    .delete('/:businessId/:productId', authorizer.verifyBusiness, productController.delete)
    .put('/:businessId/:productId', authorizer.verifyBusiness, productController.update)