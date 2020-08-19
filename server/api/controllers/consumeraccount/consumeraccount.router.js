import * as express from 'express';
import consumerAccountController from './consumeraccount.controller';

export default express
    .Router()
    .get('/', consumerAccountController.all)
    .get('/:consumerId', consumerAccountController.byId)