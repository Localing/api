import * as express from 'express';
import checkoutController from './checkout.controller';

export default express
    .Router()
    .post('/', checkoutController.checkoutCart)