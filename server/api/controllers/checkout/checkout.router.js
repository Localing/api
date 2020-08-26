import * as express from 'express';
import checkoutController from './checkout.controller';
import authorizer from '../../middlewares/authorizer';

export default express
    .Router()
    .post('/', authorizer.verifyConsumer, checkoutController.checkoutCart)