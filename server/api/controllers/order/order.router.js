import * as express from 'express';
import orderController from './order.controller';
import authorizer from '../../middlewares/authorizer';

export default express
    .Router()
    .get('/:orderId', authorizer.verifyAny, orderController.byId)
    .get('/business/:businessId', authorizer.verifyBusiness, orderController.byBusinessId)
    .get('/consumer/:consumerId', authorizer.verifyConsumer, orderController.byConsumerId)
    .get('/verify/:verificationCode', authorizer.verifyBusiness, orderController.verify)
    .post('/redeem', authorizer.verifyBusiness, orderController.redeem)